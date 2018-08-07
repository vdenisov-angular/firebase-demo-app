import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';


@Injectable()
export class AuthService {

  public authValue = new Subject();

  public user: firebase.User;

  constructor(
    // private apiService: ApiService,
    private localStorageService: LocalStorageService,
    public afAuth: AngularFireAuth
  ) {
    // this.afAuth.authState.subscribe(
    //   user => this.user = user
    // );
    this.afAuth.authState.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  public checkAuth() {
    return this.localStorageService.read('auth') || false;
  }

  public signUp(data) {
    // console.log('sign up ->', data);
    // this.authValue.next(true);
    // this.localStorageService.write('auth', true);

    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(user => {
        if (user) {
          this.authValue.next(true);
          this.user = user.user;
          return true;
        } else {
          this.authValue.next(false);
          return false;
        }
      })
      .catch(this.handleError);
  }

  public signIn(data) {
    // console.log('sign in ->', data);
    // this.authValue.next(true);
    // this.localStorageService.write('auth', true);

    this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
      .then(user => {
        if (user) {
          this.authValue.next(true);
          this.user = user.user;
          return true;
        } else {
          this.authValue.next(false);
          return false;
        }
      })
      .catch(this.handleError);
  }

  public signOut() {
    // console.log('sign out');
    // this.authValue.next(false);
    // this.localStorageService.write('auth', false);

    return this.afAuth.auth.signOut()
      .then((user) => {
        this.authValue.next(false);
        console.log('user logged out:', user);
      })
      .catch(this.handleError);
  }

  public handleError(err: any) {
    return {error: err.message || err};
  }

}
