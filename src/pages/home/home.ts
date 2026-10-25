import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

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

  // Zoekbalk: alle pagina's waarin je kunt zoeken.
  // Maak je een nieuwe pagina? Zet hem dan ook in dit lijstje.
  paginas = [
    { naam: 'pizza', pad: '/pizza' },
    { naam: 'pannekoeken', pad: '/gizza' },
    { naam: 'lasagne', pad: '/lasagne' },
    { naam: 'macncheese', pad: '/macncheese' },
    { naam: 'poffertjes', pad: '/poffertjes' },
    { naam: 'flatbread crispy chicken', pad: '/flatbreadcrispychicken' },
    { naam: 'pastasaus', pad: '/pastasaus' },
    { naam: 'nasi goreng', pad: '/nasigoreng' },
    { naam: 'koekjes', pad: '/koekjes' },
    { naam: 'eierkoeken', pad: '/eierkoeken' },
    { naam: 'cupcakes', pad: '/cupcakes' },
    { naam: 'loempia', pad: '/loempia' },
    { naam: 'knakworstjes in bladerdeeg', pad: '/knakworstjesinbladerdeeg' },
    { naam: 'wie ben ik', pad: '/wiebenik' },
  ];
  zoekterm = signal('');
  resultaten = computed(() => {
    const term = this.zoekterm().trim().toLowerCase();
    if (term === '') {
      return [];
    }
    return this.paginas.filter(pagina => pagina.naam.toLowerCase().includes(term));
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
 opennasigoreng() {
   this.router.navigate(['/nasigoreng']);
 }
 openknakworstjes() {
   this.router.navigate(['/knakworstjesinbladerdeeg']);
 }

}
