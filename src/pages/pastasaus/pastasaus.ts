import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pastasaus',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './pastasaus.html',
  styleUrl: './pastasaus.scss',
})
export class Pastasaus {

}
