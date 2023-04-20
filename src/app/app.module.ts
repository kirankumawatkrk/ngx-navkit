import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NgxNavkitModule } from 'ngx-navkit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxNavkitModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
