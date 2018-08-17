import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavService } from '@app-services/sidenav.service';
// import { Store, select } from '@ngrx/store';
// import { AppState } from '@app-interfaces/app-state';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
})
export class NavContainerComponent implements OnDestroy {
  sidenavOpen: true;
  subscription: Subscription;

  constructor(private sideNavService: SideNavService) {
    this.subscription =
      this.sideNavService
        .getState()
        .subscribe(state => { this.sidenavOpen = state });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
