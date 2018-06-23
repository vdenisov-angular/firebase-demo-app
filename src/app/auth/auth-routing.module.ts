import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';


const authRoutes: Routes = [
  // { path: '', component: AuthComponent, children: [
  //   { path: 'login', component: AuthLoginComponent },
  //   { path: 'register', component: AuthRegisterComponent },
  //   { path: 'reset', component: AuthResetComponent },
  // ]}

  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'reset', component: AuthComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
