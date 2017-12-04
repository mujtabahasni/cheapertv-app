import { ActionTypes, SearchActionTypes } from './tvshows.actions';
import { TvShowData } from './tvshows.models';

export interface State {
  isFetching: boolean;
  searchResults: TvShowData[];
}

export const initialState: State = {
  isFetching: false,
  searchResults: [],
};

export function reducer(state: State = initialState, action: ActionTypes) {
  switch (action.type) {
    case SearchActionTypes.SEARCH_SHOWS_REQUESTED:
      return {
        isFetching: true,
        searchResults: []
      };
    case SearchActionTypes.SEARCH_SHOWS_SUCCESS:
      return {
        isFetching: false,
        searchResults: action.payload,
      };
    default:
      return state;
  }
}
