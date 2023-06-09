import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgxNavkitService } from '../../ngx-navkit.service';

@Component({
  selector: 'navkit-toolbar',
  templateUrl: './navkit-toolbar.component.html',
  styleUrls: [],
})
export class NavkitToolbarComponent implements OnInit {
  open = false;
  constructor(protected navkitService: NgxNavkitService) {}

  ngOnInit(): void {}

  @HostBinding('class') get HeadingClass() {
    return 'navkit-toolbar';
  }

  @Input()
  sticky = false;

  @HostBinding('class.sticky') get toolbarSticky() {
    return this.sticky;
  }

  @Input()
  sidenavToggle: boolean = false;

  @HostBinding('style.height.px')
  @HostBinding('style.minHeight.px')
  @Input()
  height: number = 60;

  toggleSidenav() {
    this.navkitService.toggleSidenav();
  }
}
