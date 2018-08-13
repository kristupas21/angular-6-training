import { Action } from '@ngrx/store';

export enum ActionTypes {
  SELECT_USER = 'SELECT_USER',
  TOGGLE_SIDENAV = 'TOGGLE_SIDENAV'
}

export class SelectUser implements Action {
  readonly type = ActionTypes.SELECT_USER;

  constructor(public payload: string) {}
}

export class ToggleSidenav implements Action {
    readonly type = ActionTypes.TOGGLE_SIDENAV;
}

export type ActionsUnion = SelectUser | ToggleSidenav;