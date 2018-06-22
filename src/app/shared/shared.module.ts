import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent } from './layout';

import {
  DialogDeleteComponent,
  
  AuthLoginComponent,
} from './dialogs';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

    DialogDeleteComponent,

    AuthLoginComponent,
  ],
  imports: [
    CommonModule,
    MdModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  entryComponents: [
    DialogDeleteComponent,

    AuthLoginComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

    CommonModule,
    MdModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ]
})
export class SharedModule { }
