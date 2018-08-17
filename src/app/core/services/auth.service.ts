import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {

  public userSub$: Observable<Object>;
  public uid$: Observable<string>;
  public authenticated$: Observable<boolean>;

  constructor(public afAuth: AngularFireAuth) {
    this.userSub$ = this.afAuth.authState;
    this.uid$ = afAuth.authState.pipe(map(user => user.uid));
    this.authenticated$ = afAuth.authState.pipe(map(user => !!user));
  }

  public checkUserAuth() {
    return new Promise((resolve, reject) => {
      // this.authenticated$.subscribe(isAuth => resolve(isAuth));
      firebase.auth().onAuthStateChanged(user => resolve(user ? true : false));
    });
  }

  public getUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject(undefined);
        }
      });
    });
  }

  public signUp(data) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch(this.handleError);
  }

  public signIn(data) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch(this.handleError);
  }

  public signOut() {
    return this.afAuth.auth.signOut()
      .catch(this.handleError);
  }

  public handleError(error: any) {
    console.log('\n\n!!! ERROR !!!\n\n', error.message || error);
  }

}
