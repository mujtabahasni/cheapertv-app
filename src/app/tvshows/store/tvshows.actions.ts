import { Action } from 'redux';
import { TvShowData } from './tvshows.models';
import { TvDbService } from '../../core/services';

/**
 * Actions key as enum types
 *
 * Typescripts's enum is ideal for this purpose, vs constants.  Plus
 * we can use each enum value as a type specifier.  Combined with 'readonly' ensures
 * actions keys are immutable and contain the intended value.
 */

export enum SearchActionTypes {
  SEARCH_SHOWS_REQUESTED= 'tvshows/search',
  SEARCH_SHOWS_SUCCESS = 'tvshows/search success',
  SEARCH_SHOWS_FAILURE = 'tvshows/search failure',
}

export interface TvShowSearchFailure extends Action {
  readonly type: SearchActionTypes.SEARCH_SHOWS_FAILURE;
  payload: string;
}

export const searchError = (payload: string) => ({
  type: SearchActionTypes.SEARCH_SHOWS_FAILURE,
  payload,
});

export interface TvShowSearchSuccess extends Action {
  readonly type: SearchActionTypes.SEARCH_SHOWS_SUCCESS;
  payload: TvShowData[];
}

export const searchSuccess = (payload: TvShowData[]): TvShowSearchSuccess => ({
  type: SearchActionTypes.SEARCH_SHOWS_SUCCESS,
  payload,
});

export interface TvShowSearchShows extends Action {
  readonly type: SearchActionTypes.SEARCH_SHOWS_REQUESTED;
  payload: string;
}


// Thunk style action creator, return type is 'any' otherwise typescript IDEA
// will compain its not of type Action:
export function searchShows(query: string, tvdb: TvDbService): any {
  return (dispatch) => {
    // Dispatch SEARCH_SHOWS_REQUESTED action to store, before making API call
    dispatch({
      type: SearchActionTypes.SEARCH_SHOWS_REQUESTED,
      payload: query,
    });

    // Perform API call and if success, then dispatch SEARCH_SHOWS_SUCCESS action
    tvdb.search(query)
      .subscribe((results) => {
        if (results.length > 0 ) {
          dispatch(searchSuccess(results));
        } else {
          dispatch(searchError(`No results found for ${query}`));
        }

      },
      (error) => {
          dispatch(searchError(`A server error occured:  ${error}`));
      });
  };
}

export type TvShowActions=
  | TvShowSearchSuccess
  | TvShowSearchShows
  | TvShowSearchFailure;
