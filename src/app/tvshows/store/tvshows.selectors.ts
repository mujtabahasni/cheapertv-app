import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TvShowData } from './tvshows.models';
import { RootState } from '../../store';

export class TvShowSelectors {
  @select(getSortedResults) static readonly tvshows$: Observable<TvShowData[]>;
  @select(getIsFetching) static readonly isFetching$: Observable<boolean>;
  @select(getErrors) static readonly errors$: Observable<string[]>;
  @select(['tvshows', 'searchQuery']) static readonly searchQuery$: Observable<string>;
}
/*
 I have to define these as functions and then pass them to @select() due to a
 typescript bug which causes builds to fail when -aot is enabled.

 I originally had these specified as arrow functions within the @selector()
 decorator
 */

export function getSortedResults(state: RootState) {
  return state.tvshows.searchResults.sort(sortShowsByTitle);
}

export function getIsFetching(state: RootState) {
  return state.tvshows.isFetching;
}

export function getErrors(state: RootState) {
  return state.tvshows.errors;
}

function sortShowsByTitle(a: TvShowData, b: TvShowData) {
  if ( a.title.toLowerCase() < b.title.toLowerCase() ) {
    return -1;
  }else if ( a.title.toLowerCase() > b.title.toLowerCase() ) {
    return 1;
  } else {
    return 0;
  }
}

