import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navkit-toolbar',
  templateUrl: './navkit-toolbar.component.html',
  styleUrls: [],
})
export class NavkitToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class') get HeadingClass() {
    return 'navkit-toolbar';
  }

  @HostBinding('style.height.px')
  @Input()
  height: number = 60;
}
