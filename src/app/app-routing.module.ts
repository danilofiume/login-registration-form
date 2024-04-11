import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticationComponent } from './pages/authetication/authetication.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AutheticationComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'registration',
        component: RegistrationPageComponent
      }
    ],

  },
  {
    path:'dashboard',
    component: DashboardPageComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
