import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'navkit-container',
  templateUrl: './navkit-container.component.html',
  styleUrls: []
})
export class NavkitContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class') get HeadingClass() {
    return 'navkit-container';
  }

}
