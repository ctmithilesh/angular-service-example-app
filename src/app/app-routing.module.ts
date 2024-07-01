import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: RegisterFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
