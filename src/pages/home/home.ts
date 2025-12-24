import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) { }
  openGizza() {
    this.router.navigate(['/gizza']);

  }
  openPizza() {
    this.router.navigate(['/pizza']);

  }
  openPoffertjes() {
    this.router.navigate(['/poffertjes']);

  }
}
