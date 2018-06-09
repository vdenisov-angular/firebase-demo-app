import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
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
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
