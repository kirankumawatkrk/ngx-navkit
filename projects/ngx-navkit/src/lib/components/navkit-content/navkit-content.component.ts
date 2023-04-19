import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'navkit-content',
  templateUrl: './navkit-content.component.html',
  styleUrls: []
})
export class NavkitContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class') get HeadingClass() {
    return 'navkit-content';
  }

}
