import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    MdModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
