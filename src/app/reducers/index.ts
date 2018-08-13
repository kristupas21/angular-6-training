import { Action } from '@ngrx/store';

export function sideNavReducer(state: boolean = false, action: Action) {
  switch(action.type) {
    case 'TOGGLE_SIDENAV':
      return !state;

    default:
      return state;
  }
}
