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
  MatDialogModule,
  MatMenuModule,
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
    MatDialogModule,
    MatMenuModule,
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
    MatDialogModule,
    MatMenuModule,
  ]
})
export class MdModule { }
