import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "../../interfaces/app-state";
import { Name } from '../../interfaces/names';
import { Names } from "../../data/names";

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
    this.store.dispatch({ type: 'TOGGLE_SIDENAV'});
  }
}
