import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-lasagne',
  imports: [
    RouterLink
  ],
  templateUrl: './lasagne.html',
  styleUrl: './lasagne.scss',
})
export class Lasagne {
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
