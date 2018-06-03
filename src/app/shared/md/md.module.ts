import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ]
})
export class MdModule { }
