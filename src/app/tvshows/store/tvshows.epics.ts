import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Store } from 'redux';
import { Epic } from 'redux-observable';

import { RootState } from '../../store/index';
import { TvShowActions, SearchActionTypes, searchSuccess, TvShowSearchShows } from './tvshows.actions';
import { TvDbService } from '../../core/services';

export const searchShows: Epic<TvShowActions, RootState> =
  (action$, store, { tvdb }: {tvdb: TvDbService }) =>
    action$.ofType<TvShowSearchShows>(SearchActionTypes.SEARCH_SHOWS_REQUESTED)
      .switchMap(action => {
        const query = action.payload;
        return tvdb.search(query).map(searchSuccess);
      });


