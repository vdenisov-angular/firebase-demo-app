import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './shared';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
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
    TodosListComponent,
    TodosItemComponent,
  ],
  imports: [
    CommonModule,
    MdModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    TodosComponent,
    TodosListComponent,
    TodosItemComponent,
  ]
})
export class AppRoutingModule { }
