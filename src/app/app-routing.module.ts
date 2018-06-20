import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
