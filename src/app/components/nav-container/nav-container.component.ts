import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
})
export class NavContainerComponent implements OnInit {
  sidenavOpen: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.sidenavOpen = store.pipe(select('sideNavOpened'));
  }

  ngOnInit() {
  }
}
