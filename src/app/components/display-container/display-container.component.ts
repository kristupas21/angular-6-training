import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@app-interfaces/app-state';

@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
})
export class DisplayContainerComponent {
  public selectedName: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.selectedName = store.pipe(select('selectedUser'));
  }
}
