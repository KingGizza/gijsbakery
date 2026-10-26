import { Routes } from '@angular/router';
import { Gizza } from '../pages/gizza/gizza';
import { Home } from '../pages/home/home';
import { Pizza } from '../pages/pizza/pizza';
import { Poffertjes } from '../pages/poffertjes/poffertjes';
import { Koekjes } from '../pages/koekjes/koekjes';
import {Macncheese} from '../pages/macncheese/macncheese';
import {Eierkoeken} from '../pages/eierkoeken/eierkoeken';
import {Cupcakes} from '../pages/cupcakes/cupcakes';
import {Lasagne} from '../pages/lasagne/lasagne';
import {Pastasaus} from '../pages/pastasaus/pastasaus';
import {Knakworstjesinbladerdeeg} from '../pages/knakworstjesinbladerdeeg/knakworstjesinbladerdeeg';
import {Pastapesto} from '../pages/pastapesto/pastapesto';
import {Nasigoreng} from '../pages/nasigoreng/nasigoreng';
import {Waaromdoeikdit} from '../pages/waaromdoeikdit/waaromdoeikdit';
import {Wiebenik} from '../pages/wiebenik/wiebenik';
import {Loempia} from '../pages/loempia/loempia';
import {Flatbreadcrispychicken} from '../pages/flatbreadcrispychicken/flatbreadcrispychicken';


export const routes: Routes = [
  {path: '', component: Home},
  { path: 'gizza', component: Gizza },
  { path: 'pizza', component: Pizza },
  { path: 'poffertjes', component: Poffertjes },
  { path: 'koekjes', component: Koekjes},
  { path:'macncheese', component: Macncheese},
  {path: 'eierkoeken', component: Eierkoeken },
  {path: 'cupcakes', component: Cupcakes },
  {path: 'lasagne', component: Lasagne },
  {path: 'pastasaus', component: Pastasaus },
  {path: 'flatbreadcrispychicken', component: Flatbreadcrispychicken},
  {path: 'loempia', component: Loempia},
  {path: 'wiebenik', component: Wiebenik},
  {path: 'waaromdoeikdit', component: Waaromdoeikdit},
  {path: 'nasigoreng', component: Nasigoreng},
  {path: 'pastapesto', component: Pastapesto},
  {path: 'knakworstjesinbladerdeeg', component: Knakworstjesinbladerdeeg},

];
