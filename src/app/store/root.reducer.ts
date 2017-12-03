import { combineReducers } from 'redux';
import * as tvshows from '../tvshows';

export interface RootState {
  tvshows: tvshows.State,
}

export const initialRootState: RootState = {
  tvshows: tvshows.initialState,
}

export const rootReducer = combineReducers<RootState>({
  tvshows: tvshows.reducer,
});

