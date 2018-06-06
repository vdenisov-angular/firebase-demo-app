import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatListModule,
  MatDividerModule,
  MatCheckboxModule,
} from '@angular/material';

// TODO: how to add spinner before loading home page ?


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
  ]
})
export class MdModule { }
