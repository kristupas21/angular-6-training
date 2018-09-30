import { Component, OnDestroy } from '@angular/core';
import { NotificationService } from '@app-services/notification.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { CardProps } from '@app-interfaces/card-props';
import { contentCardMock } from '@app-data';

@Component({
  selector: 'app-label-exp',
  templateUrl: './label-exp.component.html'
})
export class LabelExpComponent implements OnDestroy {
  public  title = 'label expectation';
  public  notificationState = 'invisible';
  public  cardProps: CardProps;
  public  toggleDisabled = false;
  private subscription: Subscription;
  private cardContentMock = contentCardMock;

  constructor(private _notificationService: NotificationService) {
    this.subscription =
      this._notificationService
        .getState()
        .subscribe(state => this.cardProps = state);
  }

  toggleNotification(autoRemove?: boolean) {
    this.notificationState === 'invisible'
      ? this.notificationState = 'visible'
      : this.notificationState = 'invisible';

    if (autoRemove && this.notificationState !== 'invisible') {
      this.toggleDisabled = true;
      this.setInvisible();
    }
  }

  setInvisible(): void {
    setTimeout(() => {
      this.notificationState = 'invisible';
    }, 1500);
  }

  setCardProps() {
    this._notificationService.setState(this.cardContentMock);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
