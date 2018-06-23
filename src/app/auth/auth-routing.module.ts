import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthResetComponent } from './auth-reset/auth-reset.component';


const authRoutes: Routes = [
  // TODO: работает плохо
  // { path: '', component: AuthComponent, children: [
  //   { path: 'login', component: AuthLoginComponent },
  //   { path: 'register', component: AuthRegisterComponent },
  //   { path: 'reset', component: AuthResetComponent },
  // ]}

  // TODO: не работает
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'reset', component: AuthComponent }

  // TODO: заглушка работает
  // { path: '**', component: AuthComponent }

];

@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
