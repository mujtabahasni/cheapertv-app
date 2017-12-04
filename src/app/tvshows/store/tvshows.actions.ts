import { Action } from 'redux';
import { TvShowData } from './tvshows.models';
import { TvDbService } from '../../core/tvdb.service';

/**
 * Actions key as enum types
 *
 * Typescripts's enum is ideal for this purpose, vs constants.  Plus
 * we can use each enum value as a type specifier.  Combined with 'readonly' ensures
 * actions keys are immutable and contain the intended value.
 */

export enum TypeKeys {
  SEARCH_SHOWS = 'tvshows/search',
  SEARCH_SHOWS_SUCCESS = 'tvshows/search success',
  SEARCH_SHOWS_FAILURE = 'tvshows/search failure',
}

export interface TvShowSearchSuccess extends Action {
  readonly type: TypeKeys.SEARCH_SHOWS_SUCCESS;
  by: TvShowData[];
}

export const searchSuccess = (by: TvShowData[]): TvShowSearchSuccess => ({
  type: TypeKeys.SEARCH_SHOWS_SUCCESS,
  by,
});

export interface TvShowSearchShows extends Action {
  readonly type: TypeKeys.SEARCH_SHOWS;
  by: string;
}


// Thunk style action creator, return type is 'any' otherwise typescript IDEA
// will compain its not of type Action:
export function searchShows(query: string, tvdb: TvDbService): any {
  return (dispatch) => {

    // Dispatch SEARCH_SHOWS action to store, before making API call
    dispatch({
      type: TypeKeys.SEARCH_SHOWS,
      by: query,
    });

    // Perform API call and if success, then dispatch SEARCH_SHOWS_SUCCESS action
    tvdb.search(query)
      .then((results) => {
        dispatch(searchSuccess(results));
      })
      .catch((error) => {
        console.log({'err': error});
      });
  };
}
export type ActionTypes =
  | TvShowSearchSuccess
  | TvShowSearchShows;
