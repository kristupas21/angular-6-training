import { Component } from '@angular/core';
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
export class DashboardContainerComponent {
  public  names: Name[] = Names;
  public  messageSent = false;
  private subscription: Subscription;

  constructor(
    private _store: Store<AppState>,
    private _messageService: MessageService,
    private _sideNavService: SideNavService
  ) {
    this.subscription =
      this._messageService
        .getMessage()
        .subscribe(message => { this.messageSent = !!message; });
  }

  onChange(value: string) {
    this._store.dispatch(new SelectUser(value));
  }

  toggleSideNav() {
    this._sideNavService.toggleState();
  }

  handleMessage(): void {
    this.messageSent
      ? this._messageService.clearMessage()
      : this._messageService.sendMessage('Message SENT!');
  }
}
