import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SideNavService {
  private isOpen = true;
  private state = new BehaviorSubject<boolean>(true);

  toggleState(value?: boolean) {
    const val = typeof value !== 'undefined' ? value : !this.isOpen;
    this.state.next( val );
    this.isOpen = val;
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }
}
