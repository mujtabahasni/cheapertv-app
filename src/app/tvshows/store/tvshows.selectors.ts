import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TvShowData } from './tvshows.models';
import { RootState } from '../../store';

export class TvShowSelectors {
  @select(getSortedResults) public readonly tvshows$: Observable<TvShowData[]>;
  @select(getIsFetching) public readonly isFetching$: Observable<boolean>;
}

/*
 I have to define these as functions and then pass them to @select() due to a
 typescript bug which causes builds to fail when -aot is enabled.

 I originally had these specified as arrow functions within the @selector()
 decorator
 */

function getSortedResults(state: RootState) {
  return state.tvshows.searchResults.sort(sortShowsByTitle);
}

function getIsFetching(state: RootState) {
  return state.tvshows.isFetching;
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

