import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './shared';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodosFormComponent } from './todos/todos-form/todos-form.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosItemComponent } from './todos/todos-item/todos-item.component';


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
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    TodosComponent,
    TodosFormComponent,
    TodosListComponent,
    TodosItemComponent,
  ]
})
export class AppRoutingModule { }
