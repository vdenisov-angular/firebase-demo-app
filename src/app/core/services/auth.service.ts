import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {

  // public authValue = new Subject();
  public user: firebase.User;

  public userSub$: Observable<Object>;
  public authenticated$: Observable<boolean>;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.pipe(map(user => !!user));
    this.userSub$ = this.afAuth.authState;
  }

  public checkUserAuth() {
    return new Promise((resolve, reject) => {
      // this.authenticated$.subscribe(isAuth => resolve(isAuth));
      firebase.auth().onAuthStateChanged(user => resolve(user ? true : false));
    });
  }

  public signUp(data) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(response => {
        this.user = response.user;
        console.log('AUTH-SERVICE => signUp() => user -> ', this.user);
        if (this.user) {
          // this.authValue.next(true);
        } else {
          // this.authValue.next(false);
        }
      })
      .catch(this.handleError);
  }

  public signIn(data) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        this.user = response.user;
        console.log('AUTH-SERVICE => signIn() => user -> ', this.user);
        if (this.user) {
          // this.authValue.next(true);
        } else {
          // this.authValue.next(false);
        }
      })
      .catch(this.handleError);
  }

  public signOut() {
    return this.afAuth.auth.signOut()
      .then(() => {
        // this.authValue.next(false);
        this.user = undefined;
      })
      .catch(this.handleError);
  }

  public handleError(error: any) {
    console.log('\n\n!!! ERROR !!!\n\n', error.message || error);
  }

}
