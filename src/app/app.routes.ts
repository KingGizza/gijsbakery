import { Routes } from '@angular/router';
import { Gizza } from '../pages/gizza/gizza';
import { Home } from '../pages/home/home';
import { Pizza } from '../pages/pizza/pizza';
import { Poffertjes } from '../pages/poffertjes/poffertjes';
import { Koekjes } from '../pages/koekjes/koekjes';
import {Macncheese} from '../pages/macncheese/macncheese';
import {Eierkoeken} from '../pages/eierkoeken/eierkoeken';
import {Cupcakes} from '../pages/cupcakes/cupcakes';


export const routes: Routes = [
  {path: '', component: Home},
  { path: 'gizza', component: Gizza },
  { path: 'pizza', component: Pizza },
  { path: 'poffertjes', component: Poffertjes },
  { path: 'koekjes', component: Koekjes},
  { path: 'pizza', component: Cupcakes},
  { path:'macncheese', component: Macncheese},
  {path: 'eierkoeken', component: Eierkoeken }
];
