// Maakt automatisch de lijst voor de zoekbalk op de homepagina.
// Hij kijkt in elke map in src/pages en haalt daar de titel (<h1>)
// en de ingredienten (de <li>'s in de <ul>) uit, en of het vegetarisch is.
// Dit script draait vanzelf bij "npm start" en "npm run build".
import fs from 'node:fs';
import path from 'node:path';

const pagesMap = 'src/pages';
const routes = fs.readFileSync('src/app/app.routes.ts', 'utf8');
const lijst = [];

const zonderTags = tekst => tekst.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const alleenIngredient = tekst => tekst
  .replace(/^[\s.\d,½/-]+/, '')
  .replace(/^(gram|gr|kg|ml|cm|eetlepels?|theelepels?|teentjes?|tenen|teen|snufjes?|snuf|stelen|takjes|blik|keer)\s+/i, '')
  .trim();

for (const map of fs.readdirSync(pagesMap).sort()) {
  const html = path.join(pagesMap, map, map + '.html');
  if (map === 'home' || !fs.existsSync(html)) continue;
  if (!routes.includes(`'${map}'`)) continue; // pagina heeft (nog) geen adres

  const inhoud = fs.readFileSync(html, 'utf8');
  const titel = inhoud.match(/<h1>([\s\S]*?)<\/h1>/);
  const naam = titel ? zonderTags(titel[1]) : map;

  const ingredienten = [];
  if (inhoud.includes('app-personen-kiezer')) { // alleen bij recepten
    for (const ul of inhoud.match(/<ul>[\s\S]*?<\/ul>/g) ?? []) {
      for (const li of ul.match(/<li>[\s\S]*?<\/li>/g) ?? []) {
        const tekst = zonderTags(li);
        if (tekst && !tekst.endsWith(':')) ingredienten.push(tekst);
      }
    }
  }
  // labels, bijvoorbeeld <p class="vega">vegetarisch</p> of <p class="vegan">veganistisch</p>
  // zoekwoorden: de woorden waarop je dit label kunt vinden in de zoekbalk
  const labels = [];
  if (inhoud.includes('class="vega"')) {
    labels.push({ label: 'vegetarisch', zoekwoorden: ['vegetarisch', 'vega', 'veggie'] });
  }
  if (inhoud.includes('class="vegan"')) {
    labels.push({ label: 'veganistisch', zoekwoorden: ['veganistisch', 'vegan'] });
  }

  lijst.push({ naam, pad: '/' + map, labels, ingredienten: ingredienten.map(alleenIngredient).filter(Boolean) });
}

const uitvoer = `// LET OP: dit bestand wordt automatisch gemaakt door scripts/maak-zoeklijst.mjs.
// Pas het niet met de hand aan, je wijzigingen worden overschreven.

export interface ZoekPagina {
  naam: string;
  pad: string;
  labels: { label: string; zoekwoorden: string[] }[];
  ingredienten: string[];
}

export const zoeklijst: ZoekPagina[] = ${JSON.stringify(lijst, null, 2)};
`;
fs.writeFileSync('src/app/zoeklijst.ts', uitvoer);
console.log(`zoeklijst gemaakt met ${lijst.length} pagina's`);
