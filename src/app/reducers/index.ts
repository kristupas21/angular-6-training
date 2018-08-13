import { ActionsUnion, ActionTypes } from '../actions';

export function sideNavReducer(state: boolean = false, action: ActionsUnion) {
  switch(action.type) {
    case ActionTypes.TOGGLE_SIDENAV:
      return !state;

    default:
      return state;
  }
}

export function selectedNameReducer(state: string = 'none', action: ActionsUnion) {
  switch(action.type) {
    case ActionTypes.SELECT_USER:
      return action.payload;

    default:
      return state;
  }
}
