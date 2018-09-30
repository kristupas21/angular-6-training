import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDetails } from '@app-interfaces/user-details';
import { TestService } from '@app-services/test-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-case-builder',
  templateUrl: './case-builder.component.html'
})
export class CaseBuilderComponent implements OnDestroy, OnInit {
  public title = 'test case builder';
  public bool: boolean;
  public obs: UserDetails;
  private subscription: Subscription;

  constructor(
    private _testService: TestService
  ) {
    this.subscription =
      this._testService
        .getBool()
        .subscribe(bool => { this.bool = bool; });

      this._testService
        .getTestObs()
        .subscribe(obs => { this.obs = obs });
  }

  ngOnInit() {

  }

  changeBool() {
    this._testService.setTestObs({userName: 'Chris', password: 'ho'});
    this._testService.setBool(!this.bool);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
