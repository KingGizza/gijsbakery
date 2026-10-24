import {RouterLink} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loempia',
  imports: [RouterLink],
  templateUrl: './loempia.html',
  styleUrl: './loempia.scss',
})

  export class Loempia {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }
}

