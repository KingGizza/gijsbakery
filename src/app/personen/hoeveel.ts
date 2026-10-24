import { Component, computed, inject, input } from '@angular/core';
import { PersonenService } from './personen.service';

// Gebruik: <app-hoeveel [aantal]="225" /> gram boter
// Het getal is voor 4 personen en wordt automatisch omgerekend.
@Component({
  selector: 'app-hoeveel',
  template: `{{ tekst() }}`,
})
export class Hoeveel {
  aantal = input.required<number>();
  personen = inject(PersonenService);

  tekst = computed(() => {
    const nieuw = this.aantal() * this.personen.aantal() / this.personen.basis;
    return nieuw.toLocaleString('nl-NL', { maximumFractionDigits: nieuw < 10 ? 1 : 0 });
  });
}
