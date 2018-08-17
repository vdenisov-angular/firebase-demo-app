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

import {
  HoverDirective,
} from './directives';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

    DialogDeleteComponent,

    HoverDirective,
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

    HoverDirective,
  ]
})
export class SharedModule { }
