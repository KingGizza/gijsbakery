import { Component, signal } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-koekjes',
  imports: [MatButtonToggleModule],
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
