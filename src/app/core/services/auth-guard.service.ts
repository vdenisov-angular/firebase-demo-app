import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.checkAuth().then((isLoggedIn: boolean) => {
        console.log('isLoggedIn --->', isLoggedIn);
        if (isLoggedIn) {
          console.log('Welcome to this route !!!');
          return true;
        } else {
          console.log('Route is not available :(');
          return false;
        }
      });

    }

}
