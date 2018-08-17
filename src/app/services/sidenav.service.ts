import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SideNavService {
  private isOpen = true;
  private state = new BehaviorSubject<boolean>(true);

  toggleState(value?: boolean) {
    this.state.next(value || !this.isOpen );
    this.isOpen = !this.isOpen;
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }
}
