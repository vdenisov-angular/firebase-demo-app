import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MdModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,

    CommonModule,
    MdModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ]
})
export class SharedModule { }
