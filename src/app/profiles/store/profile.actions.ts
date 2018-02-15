import { Action } from 'redux';
import { ProfileFormAntennaComponent } from '../form-sections/index';

import { PersistorService } from '../../core/services';

export enum ProfileActionTypes {
  PROFILE_CLEAR = 'profile/clear',
  SELECTED_SHOWS_ADD = 'profile/add',
}

export interface SelectedShowsAdd extends Action {
  type: ProfileActionTypes;
  payload: number;
}

export interface ProfileClear extends Action {
  type: ProfileActionTypes;
  payload: boolean;
}

export const addToSelectedShows = (payload: number): SelectedShowsAdd => ({
  type: ProfileActionTypes.SELECTED_SHOWS_ADD,
  payload: payload,
});

export const clearProfile = (storage: PersistorService): any => {
  return (dispatch) => {
    dispatch({
      type: ProfileActionTypes.PROFILE_CLEAR,
      payload: true,
     });
     storage.purge();
  };
};

