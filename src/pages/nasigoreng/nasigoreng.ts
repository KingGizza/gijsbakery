import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nasigoreng',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './nasigoreng.html',
  styleUrl: './nasigoreng.scss',
})
export class Nasigoreng {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}
