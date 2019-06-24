import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private auth: UserService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.auth.isLoggedIn ?
      this.auth.isLoggedIn :
      this.router.navigate(['/signin']);
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
