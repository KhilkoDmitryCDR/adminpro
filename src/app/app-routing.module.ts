import { AuthRoutingModule } from './auth/auth.routing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [







  {path:'**',component:NotpagefoundComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule




  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
