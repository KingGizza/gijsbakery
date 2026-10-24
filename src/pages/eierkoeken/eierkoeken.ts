import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eierkoeken',
  imports: [RouterLink],
  templateUrl: './eierkoeken.html',
  styleUrl: './eierkoeken.scss',
})
export class Eierkoeken {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
