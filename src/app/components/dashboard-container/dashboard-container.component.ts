import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app-interfaces/app-state';
import { Name } from '@app-interfaces/names';
import { Names } from '@app-data/names';
import { ToggleSidenav, SelectUser } from '@app-actions';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainerComponent implements OnInit {
  names: Name[] = Names;
  selectedName: Name = Names[0];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleSideNav(): void {
    this.store.dispatch(new ToggleSidenav);
  }

  onChange(value: string) {
    this.store.dispatch(new SelectUser(value));
  }
}
