import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  entryComponents: [
    DialogDeleteComponent,
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
