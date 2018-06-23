import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthResetComponent } from './auth-reset/auth-reset.component';


@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthResetComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
    AuthRoutingModule,
  ],
  exports: [ ]
})
export class AuthModule { }
