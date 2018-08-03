import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  ApiService,
  LocalStorageService,
  TodosService,
  UserService,
  AuthService,
} from './services';

import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({ })
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        LocalStorageService,
        TodosService,
        UserService,
        AuthService,

        AngularFireAuth,
      ]
    };
  }
}
