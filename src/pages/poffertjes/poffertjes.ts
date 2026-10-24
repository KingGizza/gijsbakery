import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';

import {Component} from '@angular/core';



export class DatepickerOverviewExample {}
@Component({
  selector: 'app-poffertjes',
  imports: [PersonenKiezer, Hoeveel, RouterLink],
  templateUrl: './poffertjes.html',
  styleUrl: './poffertjes.scss',
})
export class Poffertjes {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }

}
