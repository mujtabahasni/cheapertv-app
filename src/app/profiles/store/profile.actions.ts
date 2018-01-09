import { Action } from 'redux';
import { ProfileFormAntennaComponent } from '../form-sections/index';

export enum ProfileActionTypes {
  SELECTED_SHOWS_ADD = 'profile/add',
}

export interface SelecteShowsAdd extends Action {
  type: ProfileActionTypes;
  payload: number;
}

export const addToSelectedShows = (payload: number): SelecteShowsAdd => ({
  type: ProfileActionTypes.SELECTED_SHOWS_ADD,
  payload: payload,
});
