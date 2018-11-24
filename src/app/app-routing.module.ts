import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelComponent} from './shared/layout/panel/panel.component';
import {WebSiteComponent} from './shared/layout/website/web-site.component';

export const routes: Routes = [
  {
    path: '',
    component: WebSiteComponent,
    children: [
      {
        path: '',
        loadChildren: './website/web-site.module#WebSiteModule',
        data: { header: '' }
      }
    ]
  },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      {
        path: '',
        loadChildren: './panel/dashboard/dashboard.module#DashboardModule',
        data: { header: '' }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
