import { Component } from '@angular/core';
import { NavItems } from 'ngx-navkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-navkit-test';

  navItems: NavItems[] = [
    {
      name: 'First',
      route: 'first',
    },
    {
      name: 'Second',
      route: 'second',
    },
    {
      name: 'Third',
      route: 'Third',
    },
    {
      name: 'Fourth',
      route: 'Fourth',
    },
    {
      name: 'Fifth',
      route: 'Fifth',
    },
  ];
}
