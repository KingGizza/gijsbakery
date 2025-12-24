import { Routes } from '@angular/router';
import { Gizza } from '../pages/gizza/gizza';
import { Home } from '../pages/home/home';
import { Pizza } from '../pages/pizza/pizza';
import { Poffertjes } from '../pages/poffertjes/poffertjes';

export const routes: Routes = [
  {path: '', component: Home},
  { path: 'gizza', component: Gizza },
  { path: 'pizza', component: Pizza },
  { path: 'poffertjes', component: Poffertjes },

];
