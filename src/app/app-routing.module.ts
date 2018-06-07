import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './shared';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {
  TodosComponent,
  TodosFormComponent,
  TodosListComponent,
  TodosItemComponent
} from './todos';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
    TodosFormComponent,
    TodosListComponent,
    TodosItemComponent,
  ],
  imports: [
    CommonModule,
    MdModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
