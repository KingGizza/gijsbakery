import { Injectable, signal } from '@angular/core';

// Hier wordt onthouden voor hoeveel personen je wilt koken.
// De recepten zijn geschreven voor 4 personen.
@Injectable({ providedIn: 'root' })
export class PersonenService {
  basis = 4;
  aantal = signal(4);
}
