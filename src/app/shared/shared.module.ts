import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent } from './layout';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    FooterComponent,

    CommonModule,
    MdModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ]
})
export class SharedModule { }
