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
  MatFormFieldModule,
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
    MatFormFieldModule,
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
    MatFormFieldModule,
  ]
})
export class MdModule { }
