import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'todos', loadChildren: './todos/todos.module#TodosModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
]

// imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
