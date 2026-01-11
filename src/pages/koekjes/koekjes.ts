import { Component } from '@angular/core';

@Component({
  selector: 'app-koekjes',
  imports: [],
  templateUrl: './koekjes.html',
  styleUrl: './koekjes.scss',
})
export class Koekjes {
  goAH() {
    window.location.href = 'https://www.ah.nl';
}}
