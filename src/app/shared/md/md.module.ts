import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
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

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
