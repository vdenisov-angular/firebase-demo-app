import { NgModule } from '@angular/core';

import { MdModule } from './md/md.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    MdModule,
    RouterModule,
  ],
  exports: [
    MdModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
