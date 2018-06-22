import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DialogDeleteComponent } from './dialogs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    DialogDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    CoreModule.forRoot(),
    AppRoutingModule,
  ],
  entryComponents: [
    DialogDeleteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
