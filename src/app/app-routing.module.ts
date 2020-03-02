import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { UserActivateComponent } from './components/authentication/user-activate/user-activate.component';
import { PasswordUpdateComponent } from './components/authentication/password-update/password-update.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'user-activate/:token', component: UserActivateComponent},
  {path:'password-update/:token', component: PasswordUpdateComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
