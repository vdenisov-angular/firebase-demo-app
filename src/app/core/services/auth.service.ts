import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
  ) { }

  public signUp(username: string, email: string, password: string) {
    // 
  }

  public signIn(email: string, password: string) {
    //
  }

  public signOut() {
    //
  }


}
