import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flatbreadcrispychicken',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './flatbreadcrispychicken.html',
  styleUrl: './flatbreadcrispychicken.scss',
})
export class Flatbreadcrispychicken {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }

}
