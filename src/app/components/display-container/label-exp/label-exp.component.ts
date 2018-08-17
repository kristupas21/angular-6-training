import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '@app-services/notification.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { CardProps } from '@app-interfaces/card-props';

@Component({
  selector: 'app-label-exp',
  templateUrl: './label-exp.component.html'
})
export class LabelExpComponent implements OnInit, OnDestroy {
  public title = 'label expectation';
  public notificationState = 'invisible';
  public cardProps: CardProps;
  private subscription: Subscription;
  private cardContentMock = {
    title: 'Card updated',
    content: 'The card was successfully updated. The notification system works as expected.'
  };

  constructor(private _notificationService: NotificationService) {
    this.subscription =
      this._notificationService
        .getState()
        .subscribe(state => this.cardProps = state);
  }

  ngOnInit() {
  }

  toggleNotification() {
    this.notificationState === 'invisible'
      ? this.notificationState = 'visible'
      : this.notificationState = 'invisible';
  }

  setCardProps() {
    this._notificationService.setState(this.cardContentMock)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
