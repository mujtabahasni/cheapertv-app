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

export const searchShows = (payload: string): TvShowSearchShows => ({
  type: SearchActionTypes.SEARCH_SHOWS_REQUESTED,
  payload,
});

export type TvShowActions=
  | TvShowSearchSuccess
  | TvShowSearchShows
  | TvShowSearchFailure;
