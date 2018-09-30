import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app-interfaces/app-state';
import { Name } from '@app-interfaces/names';
import { Names } from '@app-data/names';
import { SelectUser } from '@app-actions';
import { SideNavService } from '@app-services/sidenav.service';
import { LocalStorageService } from '@app-services/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainerComponent {
  public  names: Name[] = Names;

  constructor(
    private _store: Store<AppState>,
    private _sideNavService: SideNavService,
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {}

  onChange(value: string) {
    this._store.dispatch(new SelectUser(value));
  }

  toggleSideNav() {
    this._sideNavService.toggleState();
  }

 clearStorage(): void {
    this._localStorageService.deleteUser();
    this._router.navigate(['login']);
  }
}
