import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
