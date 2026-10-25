import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pastapesto',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './pastapesto.html',
  styleUrl: './pastapesto.scss',
})
export class Pastapesto {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
