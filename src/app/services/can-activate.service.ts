import { CanActivate } from '@app-interfaces/can-activate';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserToken } from '@app-services/user-token.service';
import { UserDetails } from '@app-interfaces/user-details';
import { LocalStorageService } from '@app-services/local-storage.service';

@Injectable()
export class Permissions {
  constructor(private _localStorageService: LocalStorageService) {}

  canActivate(user?: UserDetails): boolean {
    if (user.userName === 'admin' && user.password === 'admin') {
      this._localStorageService.storeUser(user);
      return true;
    }

    return false;
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(
    private permissions: Permissions,
    private currentUser: UserToken,
    private _router: Router,
    private _localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    if (this._localStorageService.checkUser() || this.permissions.canActivate(this.currentUser.userDetails)) {
      return true;
    }

    this._router.navigate(['login']);
    return false;
  }
}
