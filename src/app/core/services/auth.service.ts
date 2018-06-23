import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class AuthService {

  public authValue = new Subject();

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
  ) { }

  public checkAuth() {
    return this.localStorageService.read('auth') || false;
  }

  public signUp(data) {
    console.log('sign up ->', data);
    this.authValue.next(true);
    this.localStorageService.write('auth', true);
  }

  public signIn(data) {
    console.log('sign in ->', data);
    this.authValue.next(true);
    this.localStorageService.write('auth', true);
  }

  public signOut() {
    console.log('sign out');
    this.authValue.next(false);
    this.localStorageService.write('auth', false);
  }


}
