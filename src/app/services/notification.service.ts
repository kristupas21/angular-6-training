import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CardProps } from '@app-interfaces/card-props';

@Injectable()
export class NotificationService {
  private state = new BehaviorSubject<CardProps>({ title: 'Default title', content: 'Default content'});

  setState(cardProps: CardProps) {
    this.state.next( cardProps );
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }
}
