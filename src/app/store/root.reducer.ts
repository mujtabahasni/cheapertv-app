import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import * as tvshows from '../tvshows';
import * as profiles from '../profiles';

export interface RootState {
  tvshows: tvshows.State;
  profiles: profiles.ProfileState;
}

export const initialRootState: RootState = {
  tvshows: tvshows.initialState,
  profiles: profiles.initialProfileState,
};

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers<RootState>({
    tvshows: tvshows.reducer,
    profiles: profiles.reducer,
  })
);

