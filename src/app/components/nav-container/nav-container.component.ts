import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavService } from '@app-services/sidenav.service';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
})
export class NavContainerComponent implements OnDestroy {
  public  sideNavOpen = true;
  private subscription: Subscription;

  constructor(private sideNavService: SideNavService) {
    this.subscription =
      this.sideNavService
        .getState()
        .subscribe(state => { this.sideNavOpen = state });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
