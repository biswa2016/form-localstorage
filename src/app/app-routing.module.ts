import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrstionComponent } from './registrstion/registrstion.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"registrstion",component:RegistrstionComponent},
  {path:"userdashboard",component:UserDashboardComponent,canActivate:[AuthGuard]},
  {path:"**",component:RegistrstionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
