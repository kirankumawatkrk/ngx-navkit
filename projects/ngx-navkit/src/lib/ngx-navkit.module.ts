import { NgModule } from '@angular/core';

//UI Components used in ngx-navkit
import { NavkitContainerComponent } from './components/navkit-container/navkit-container.component';
import { NavkitContentComponent } from './components/navkit-content/navkit-content.component';
import { NavkitSidenavComponent } from './components/navkit-sidenav/navkit-sidenav.component';
import { NavkitToolbarComponent } from './components/navkit-toolbar/navkit-toolbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavkitContainerComponent,
    NavkitContentComponent,
    NavkitSidenavComponent,
    NavkitToolbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavkitContainerComponent,
    NavkitContentComponent,
    NavkitSidenavComponent,
    NavkitToolbarComponent,
  ],
})
export class NgxNavkitModule {}
