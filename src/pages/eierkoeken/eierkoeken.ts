import { Component } from '@angular/core';

@Component({
  selector: 'app-eierkoeken',
  imports: [],
  templateUrl: './eierkoeken.html',
  styleUrl: './eierkoeken.scss',
})
export class Eierkoeken {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
