import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {
  canActivate(_next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): boolean {
    if (this._authService.currentUser != null) {
      return true;
    }
    this._authService.redirectURL = _state.url;
    this._route.navigate(['/login']);

  }

  constructor(private _authService: UserAuthService, private _route: Router) { }
}
