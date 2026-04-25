import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule, MatMenu, MatMenuTrigger, MatMenuItem,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Home {
  date: string="";
  constructor(private router: Router) {
  }

  openGizza() {
    this.router.navigate(['/gizza']);
  }

  openPizza() {
    this.router.navigate(['/pizza']);
  }

  openPoffertjes() {
    this.router.navigate(['/poffertjes']);
  }

  opencupcakes() {
    this.router.navigate(['/cupcakes']);
  }

  openkoekjes() {
    this.router.navigate(['/koekjes']);
  }

  openmacncheese() {
    this.router.navigate(['/macncheese']);
  }
  openeierkoeken() {
    this.router.navigate(['/eierkoeken']);
  }
  openlasagne() {
    this.router.navigate(['/lasagne']);
  }
 openpastasaus(){
    this.router.navigate(['/pastasaus']);
 }
 openflatbreadcrispychicken() {
   this.router.navigate(['/flatbreadcrispychicken']);
 }

}
