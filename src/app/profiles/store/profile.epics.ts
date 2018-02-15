import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/add/switchMap';
import { ofType } from 'redux-observable';
import { ProfileActionTypes } from './profile.actions';
import { PersistorService } from '../../core/services';
import { Profile } from 'selenium-webdriver/firefox';

export const clearProfile =
(action$: Observable<ProfileActionTypes>): Observable<ProfileActionTypes> =>
  action$.ofType(ProfileActionTypes.PROFILE_CLEAR)
  .switchMap()

