import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './shared';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
    TodosListComponent,
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
  ]
})
export class AppRoutingModule { }
