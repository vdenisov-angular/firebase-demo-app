import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.checkUserAuth().then((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          console.log('Welcome to protected route !!!');
          return true;
        } else {
          console.log('Route is not available :(');
          this.router.navigateByUrl('/');
          return false;
        }
      });

    }

}
