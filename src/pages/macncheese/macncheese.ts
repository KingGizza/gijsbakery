import { Component } from '@angular/core';

@Component({
  selector: 'app-macncheese',
  imports: [],
  templateUrl: './macncheese.html',
  styleUrl: './macncheese.scss',
})
export class Macncheese {
  goAH() {
    window.location.href = 'https://www.ah.nl';
  }

}
