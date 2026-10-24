import {Hoeveel} from '../../app/personen/hoeveel';
import {PersonenKiezer} from '../../app/personen/personen-kiezer';
import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gizza',
  imports: [PersonenKiezer, Hoeveel, RouterLink, MatButtonModule],
  templateUrl: './gizza.html',
  styleUrl: './gizza.scss',
})
export class Gizza {

  goAH() {
    window.location.href = 'https://www.ah.nl';
  }

}
