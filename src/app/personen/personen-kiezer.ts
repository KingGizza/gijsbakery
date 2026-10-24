import { Component, inject } from '@angular/core';
import { PersonenService } from './personen.service';

// Het invulvak: "voor hoeveel personen?"
@Component({
  selector: 'app-personen-kiezer',
  template: `
    <p class="kiezer">
      <label>voor hoeveel personen?
        <input type="number" min="1" max="50" [value]="personen.aantal()" (input)="zet($event)" />
      </label>
    </p>
  `,
  styles: `
    .kiezer input { width: 60px; margin-left: 8px; font-size: 16px; }
  `,
})
export class PersonenKiezer {
  personen = inject(PersonenService);

  zet(event: Event) {
    const getal = Number((event.target as HTMLInputElement).value);
    if (getal > 0) {
      this.personen.aantal.set(getal);
    }
  }
}
