import { Action } from 'redux';
import { ProfileFormAntennaComponent } from '../form-sections/index';

import { PersistorService } from '../../core/services';
import { Profile } from 'selenium-webdriver/firefox';

export enum ProfileActionTypes {
  PROFILE_CLEAR = 'profile/clear',
  PROFILE_CLEARED = 'profile/cleared',
  SELECTED_SHOWS_ADD = 'profile/add',
  SELECTED_SHOWS_DELETE = 'profile/delete',
}

export interface SelectedShowsAdd extends Action {
  type: ProfileActionTypes;
  payload: number[];
}

export interface SelectedShowsDelete extends Action {
  type: ProfileActionTypes;
  payload: number[];
}

export interface ProfileClear extends Action {
  type: ProfileActionTypes;
  payload: boolean;
}

export interface ProfileCleared extends Action {
  type: ProfileActionTypes;
  payload: boolean;
}

export type ProfileActions =
  | SelectedShowsAdd
  | SelectedShowsDelete
  | ProfileClear
  | ProfileCleared;

export const addToSelectedShows = (payload: number[]): SelectedShowsAdd => ({
  type: ProfileActionTypes.SELECTED_SHOWS_ADD,
  payload: payload,
});

export const removeFromSelectedShows = (payload: number[]): SelectedShowsDelete => ({
  type: ProfileActionTypes.SELECTED_SHOWS_DELETE,
  payload: payload,
});

export const clearProfile = (): ProfileClear => ({
  type: ProfileActionTypes.PROFILE_CLEAR,
  payload: true,
});

export const clearedProfile = (): ProfileCleared => ({
  type: ProfileActionTypes.PROFILE_CLEARED,
  payload: true,
});
