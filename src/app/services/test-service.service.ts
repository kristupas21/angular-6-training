import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { UserDetails } from '@app-interfaces/user-details';

@Injectable()
export class TestService {
  public $behaviorSubject = new BehaviorSubject<boolean>(false);
  public $subject = new Subject<UserDetails>();

  getBool(): Observable<boolean> {
    return this.$behaviorSubject.asObservable();
  }

  setBool(bool: boolean) {
    this.$behaviorSubject.next(bool);
  }

  setTestObs(obj: UserDetails) {
    this.$subject.next(obj);
  }

  getTestObs(): Observable<UserDetails> {
    return this.$subject.asObservable();
  }
}

