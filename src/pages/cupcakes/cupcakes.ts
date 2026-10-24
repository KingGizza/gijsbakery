import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cupcakes',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './cupcakes.html',
  styleUrl: './cupcakes.scss',
})
export class Cupcakes {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
