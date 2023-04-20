import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxNavkitService {
  sideNavWidth: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);
  constructor() {}

  openSidenav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleSidenav() {
    this.openSidenav.pipe(take(1)).subscribe((value) => {
      console.log(value);
      this.openSidenav.next(!value);
    });
  }
}
