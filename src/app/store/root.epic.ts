import { combineEpics } from 'redux-observable';

import { RootState, RootAction } from './root.reducer';
import { clearProfile } from '../profiles/store/profile.epics';
import { searchShows } from '../tvshows/store/tvshows.epics';

export const rootEpic = combineEpics<RootAction, RootState>(
  searchShows,
  clearProfile
);
