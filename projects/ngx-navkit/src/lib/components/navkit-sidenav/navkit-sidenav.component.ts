import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { Mode } from '../../models';
import { NavItems } from '../../models/navItems.inteface';
//import { RouteService } from '@services/route.service';
//import { ToolbarService } from '@services/toolbar.service';

@Component({
  selector: 'navkit-sidenav',
  templateUrl: './navkit-sidenav.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavkitSidenavComponent implements OnInit {
  @Input() mode: Mode = 'side';

  @Input()
  width: number = 300;

  @Input() navItems: NavItems[] = [];

  constructor() {} //private routeService: RouteService //private toolbarService: ToolbarService,

  ngOnInit(): void {}

  @HostBinding('class') get HeadingClass() {
    return 'navkit-sidenav';
  }

  protected toggleSidenav() {
    //if (this.mode === 'over')
    //this.toolbarService.toggle();
  }

  /**
   * @description
   * Whether current child route is active
   * @param item
   */
  protected childActive(item: any): boolean {
    let routes: any[] = [];
    routes.push(item.url);
    if (item.children) {
      item.children.map((child: any) => {
        if (child.url) routes.push(child.url);
      });
    }
    return false;
    //return routes.includes(this.routeService.getCurrentRoute());
  }
}
