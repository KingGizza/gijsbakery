import {RouterLink} from '@angular/router';
import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-knakworstjesinbladerdeeg',
  imports: [RouterLink, PersonenKiezer, Hoeveel],
  templateUrl: './knakworstjesinbladerdeeg.html',
  styleUrl: './knakworstjesinbladerdeeg.scss',
})
export class Knakworstjesinbladerdeeg {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
