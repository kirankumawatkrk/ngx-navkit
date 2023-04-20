import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Mode } from '../../models';
import { NavItems } from '../../models/navItems.inteface';
import { NgxNavkitService } from '../../ngx-navkit.service';
import { take } from 'rxjs';
//import { RouteService } from '@services/route.service';
//import { ToolbarService } from '@services/toolbar.service';

@Component({
  selector: 'navkit-sidenav',
  templateUrl: './navkit-sidenav.component.html',
  styleUrls: [],
})
export class NavkitSidenavComponent implements OnInit {
  @Input() mode: Mode = 'side';

  @Input()
  width: number = 300;

  @Input() navItems: NavItems[] = [];
  sidenavOpen: boolean = true;

  constructor(protected navkitService: NgxNavkitService) {}

  ngOnInit(): void {
    this.navkitService.sideNavWidth.next(this.width);
  }

  @HostBinding('class') get HeadingClass() {
    return 'navkit-sidenav';
  }

  toggleSidenav() {
    this.navkitService.toggleSidenav();
  }
}
