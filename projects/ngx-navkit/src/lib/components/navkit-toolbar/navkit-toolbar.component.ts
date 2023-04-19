import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navkit-toolbar',
  templateUrl: './navkit-toolbar.component.html',
  styleUrls: [],
})
export class NavkitToolbarComponent implements OnInit {
  @Input() color: string = '#000';
  @Input() body: string = 'Hello world';
  constructor() { }

  ngOnInit(): void { }

  @HostBinding('class') get HeadingClass() {
    return 'navkit-toolbar';
  }
}
