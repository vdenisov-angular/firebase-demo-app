import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
  ) { }

  public getUser(uid: string) {
    return this.apiService.get(`users/${uid}`)
  }

}
