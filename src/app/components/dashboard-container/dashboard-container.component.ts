import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app-interfaces/app-state';
import { Name } from '@app-interfaces/names';
import { Names } from '@app-data/names';
import { SelectUser } from '@app-actions';
import { MessageService } from '@app-services/message.service';
import { SideNavService } from '@app-services/sidenav.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainerComponent implements OnInit {
  names: Name[] = Names;
  messageSent = false;
  subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private messageService: MessageService,
    private sideNavService: SideNavService
  ) {
    this.subscription =
      this.messageService
        .getMessage()
        .subscribe(message => { this.messageSent = !!message });
  }

  ngOnInit() {
  }

  // toggleSideNav(): void {
  //   this.store.dispatch(new ToggleSidenav);
  // }

  onChange(value: string) {
    this.store.dispatch(new SelectUser(value));
  }

  toggleSideNav() {
    this.sideNavService.toggleState();
  }

  handleMessage(): void {
    this.messageSent
      ? this.messageService.clearMessage()
      : this.messageService.sendMessage('Message SENT!');
  }
}
