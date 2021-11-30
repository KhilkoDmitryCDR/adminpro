import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
