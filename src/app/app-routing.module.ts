import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/services';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', canActivate: [AuthGuard],
      component: ProfileComponent },
  { path: 'todos', canActivate: [AuthGuard],
      loadChildren: './todos/todos.module#TodosModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

// imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
