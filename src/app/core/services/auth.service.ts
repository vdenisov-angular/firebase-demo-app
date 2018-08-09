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

  public isAuth;

  constructor(public afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(
    //   user => {
    //     this.user = user;
    //   }
    // );

    this.authValue
      .subscribe((nextValue) => {
        this.isAuth = nextValue;
      });
  }

  public checkUserAuth() {
    return new Promise((resolve, reject) => {
      try {
        firebase.auth().onAuthStateChanged(user => {
          resolve(user ? true : false);
        });
      } catch (err) {
          reject(err);
      }
    });
  }

  public signUp(data) {
    // this.localStorageService.write('auth', true);

    return this.afAuth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(user => {
        if (user) {
          this.authValue.next(true);
          this.user = user.user;
        } else {
          this.authValue.next(false);
        }
      })
      .catch(this.handleError);
  }

  public signIn(data) {
    // this.localStorageService.write('auth', true);

    return this.afAuth.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        this.user = response.user;
        if (this.user) {
          this.authValue.next(true);
          // console.log('user => ', this.user);
        } else {
          this.authValue.next(false);
          // console.log('no user !');
        }
      })
      .catch(this.handleError);
  }

  public signOut() {
    // this.localStorageService.write('auth', false);

    return this.afAuth.auth.signOut()
      .then(() => this.authValue.next(false))
      .catch(this.handleError);
  }

  public handleError(error: any) {
    console.log('\n\n!!! ERROR !!!\n\n', error.message || error);
  }

}
