import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/add/switchMap';
import { Store } from 'redux';
import { Epic } from 'redux-observable';

import { RootState } from '../../store/index';
import { ProfileActions, ProfileActionTypes, clearedProfile } from './profile.actions';
import { PersistorService } from '../../core/services';
import { Profile } from 'selenium-webdriver/firefox';

export const clearProfile: Epic<ProfileActions, RootState> =
  (action$, store, { persistor }: {persistor: PersistorService }) =>
    action$.ofType(ProfileActionTypes.PROFILE_CLEAR)
      .map(action => {
        persistor.purge();
        return clearedProfile();
      });


