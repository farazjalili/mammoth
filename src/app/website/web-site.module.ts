import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSiteRoutingModule } from './web-site-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    WebSiteRoutingModule
  ]
})
export class WebSiteModule { }
