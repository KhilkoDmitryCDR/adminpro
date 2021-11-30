import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [

    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
