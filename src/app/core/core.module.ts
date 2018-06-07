import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  ApiService,
  LocalStorageService,
  TodosService,
} from './services';


@NgModule({ })
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        LocalStorageService,
        TodosService,
      ]
    };
  }
}
