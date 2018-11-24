import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { PanelComponent } from './panel/panel.component';
import { WebSiteComponent } from './website/web-site.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [PanelComponent, WebSiteComponent]
})
export class LayoutModule { }
