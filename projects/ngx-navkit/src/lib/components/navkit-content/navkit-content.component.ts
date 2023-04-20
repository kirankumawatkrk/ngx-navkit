import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { take } from 'rxjs';
import { NgxNavkitService } from '../../ngx-navkit.service';

@Component({
  selector: 'navkit-content',
  templateUrl: './navkit-content.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavkitContentComponent implements OnInit {
  constructor(
    private navkitService: NgxNavkitService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.navkitService.sideNavWidth.pipe(take(1)).subscribe((width) => {
      if (width) {
        this.navkitService.openSidenav.pipe(take(1)).subscribe((value) => {
          if (value) {
            this.width = `100%`;
            this.cdRef.detectChanges();
            return;
          }
          this.width = `calc(100% - ${width}px)`;
          this.cdRef.detectChanges();
        });
      }
    });
  }

  @HostBinding('class') get HeadingClass() {
    return 'navkit-content';
  }

  @HostBinding('style.width')
  width: string = 100 + '%';
}
