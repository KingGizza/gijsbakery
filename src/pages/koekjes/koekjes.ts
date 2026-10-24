import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component, signal } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-koekjes',
  imports: [PersonenKiezer, Hoeveel, RouterLink, MatButtonToggleModule],
  templateUrl: './koekjes.html',
  styleUrl: './koekjes.scss',
})
export class Koekjes {
  goAH() {
    window.location.href = 'https://www.ah.nl';
}
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
