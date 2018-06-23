import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent } from './layout';

import {
  DialogDeleteComponent,
} from './dialogs';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

    DialogDeleteComponent,
  ],
  imports: [
    CommonModule,
    MdModule,
    HttpModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DialogDeleteComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

    CommonModule,
    MdModule,
    HttpModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
