import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import {
  TodosComponent,
  TodosFormComponent,
  TodosListComponent,
  TodosItemComponent
} from './todos';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TodosComponent,
    TodosFormComponent,
    TodosListComponent,
    TodosItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    SharedModule,
    CoreModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
