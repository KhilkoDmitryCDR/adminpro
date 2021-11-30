import { PagesComponent } from './pages/pages.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:PagesComponent , children:[

    {path:'dashboard',component:DashboardComponent},
    {path:'graficacl1',component:GraficalComponent},
    {path:'progress',component:ProgressComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  ]},



  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},


  {path:'**',component:NotpagefoundComponent}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
