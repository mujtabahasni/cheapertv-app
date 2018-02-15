import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/add/switchMap';
import { Store } from 'redux';
import { Epic } from 'redux-observable';

import { RootState } from '../../store/index';
import { TvShowActions, SearchActionTypes, searchSuccess, TvShowSearchShows } from './tvshows.actions';
import { TvDbService } from '../../core/services';
import { Profile } from 'selenium-webdriver/firefox';

export const clearProfile: Epic<TvShowActions, RootState> =
  (action$, store, { tvdb }: {tvdb: TvDbService }) =>
    action$.ofType<TvShowSearchShows>(SearchActionTypes.SEARCH_SHOWS_REQUESTED)
      .lift(action => {
        const query = action.payload;
        return tvdb.search(query).map(searchSuccess);
      });


