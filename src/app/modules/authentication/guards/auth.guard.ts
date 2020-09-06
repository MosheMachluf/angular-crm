import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.afa.authState.pipe(
      map((user) => {
        if (state.url === '/login') {
          if (user) {
            this.router.parseUrl('/');
            return false;
          } else {
            return true;
          }
        }

        if (user) {
          // console.log('your url:', state.url);
          return true;
        }

        return this.router.parseUrl('/login');
      }),
      take(1)
    );
  }

  constructor(private afa: AngularFireAuth, private router: Router) {}
}
