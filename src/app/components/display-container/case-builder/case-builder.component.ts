import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '@app-services/message.service';

@Component({
  selector: 'app-case-builder',
  templateUrl: './case-builder.component.html'
})
export class CaseBuilderComponent implements OnDestroy {
  public  title = 'test case builder';
  public  message: any = {};
  private subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription =
      this.messageService
        .getMessage()
        .subscribe(message => { this.message = message });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
