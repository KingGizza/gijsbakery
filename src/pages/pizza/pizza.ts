import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss',
})
export class Pizza {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
