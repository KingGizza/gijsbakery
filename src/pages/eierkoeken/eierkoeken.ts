import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eierkoeken',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './eierkoeken.html',
  styleUrl: './eierkoeken.scss',
})
export class Eierkoeken {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
