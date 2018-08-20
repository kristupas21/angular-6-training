import { CanActivate } from '@app-interfaces/can-activate';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserToken } from '@app-services/user-token.service';
import { UserDetails } from '@app-interfaces/user-details';

export class Permissions {
  canActivate(user?: UserDetails): boolean {
    return (user.userName === 'admin' && user.password === 'admin');
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    return this.permissions.canActivate(this.currentUser.userDetails);
  }
}
