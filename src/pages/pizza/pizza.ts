import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  imports: [RouterLink],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss',
})
export class Pizza {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
