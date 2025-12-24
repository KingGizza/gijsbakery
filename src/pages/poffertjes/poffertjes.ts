import { Component } from '@angular/core';

@Component({
  selector: 'app-poffertjes',
  imports: [],
  templateUrl: './poffertjes.html',
  styleUrl: './poffertjes.scss',
})
export class Poffertjes {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }

}
