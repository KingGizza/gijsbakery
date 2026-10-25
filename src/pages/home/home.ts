import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { zoeklijst } from '../../app/zoeklijst';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatMenu, MatMenuTrigger, MatMenuItem,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Home {
  date: string="";

  // Zoekbalk: zoekt op de naam van een pagina en op ingredienten.
  // De lijst (zoeklijst.ts) wordt automatisch gemaakt bij "npm start" en "npm run build".
  zoekterm = signal('');
  resultaten = computed(() => {
    const term = this.zoekterm().trim().toLowerCase();
    if (term === '') {
      return [];
    }
    const gevonden = [];
    for (const pagina of zoeklijst) {
      const inNaam = pagina.naam.toLowerCase().includes(term);
      const ingredienten = pagina.ingredienten.filter(i => i.toLowerCase().includes(term));
      if (inNaam || ingredienten.length > 0) {
        gevonden.push({ naam: pagina.naam, pad: pagina.pad, ingredienten: inNaam ? [] : ingredienten });
      }
    }
    return gevonden;
  });

  zoek(event: Event) {
    this.zoekterm.set((event.target as HTMLInputElement).value);
  }

  constructor(private router: Router) {
  }

  openGizza() {
    this.router.navigate(['/gizza']);
  }

  openPizza() {
    this.router.navigate(['/pizza']);
  }

  openPoffertjes() {
    this.router.navigate(['/poffertjes']);
  }

  opencupcakes() {
    this.router.navigate(['/cupcakes']);
  }

  openkoekjes() {
    this.router.navigate(['/koekjes']);
  }

  openmacncheese() {
    this.router.navigate(['/macncheese']);
  }
  openeierkoeken() {
    this.router.navigate(['/eierkoeken']);
  }
  openlasagne() {
    this.router.navigate(['/lasagne']);
  }
 openpastasaus(){
    this.router.navigate(['/pastasaus']);
 }
 openflatbreadcrispychicken() {
   this.router.navigate(['/flatbreadcrispychicken']);
 }
 openloempia() {
   this.router.navigate(['/loempia']);
 }
 openwiebenik() {
   this.router.navigate(['/wiebenik']);
 }
 openpastapesto() {
   this.router.navigate(['/pastapesto']);
 }
 opennasigoreng() {
   this.router.navigate(['/nasigoreng']);
 }
 openknakworstjes() {
   this.router.navigate(['/knakworstjesinbladerdeeg']);
 }

}
