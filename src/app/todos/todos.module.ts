import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { TodosRoutingModule } from './todos-routing.module';

import { TodosComponent } from './todos.component'
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosItemComponent } from './todos-item/todos-item.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodosFormComponent,
    TodosListComponent,
    TodosItemComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
    TodosRoutingModule,
  ],
  exports: [ ]
})
export class TodosModule { }
