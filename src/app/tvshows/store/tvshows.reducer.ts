import { ActionTypes, SearchActionTypes } from './tvshows.actions';
import { TvShowData } from './tvshows.models';

export interface State {
  isFetching: boolean;
  searchResults?: TvShowData[];
  errors?: string[];
}

export const initialState: State = {
  isFetching: false,
  searchResults: [],
  errors: [],
};

export function reducer(state: State = initialState, action: ActionTypes) {
  switch (action.type) {
    case SearchActionTypes.SEARCH_SHOWS_REQUESTED:
      return {
        isFetching: true,
        searchResults: [],
        errors: [],
      };
    case SearchActionTypes.SEARCH_SHOWS_SUCCESS:
      return {
        isFetching: false,
        searchResults: action.payload,
        errors: [],
      };
    case SearchActionTypes.SEARCH_SHOWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: [...state.errors, action.payload]
      };
    default:
      return state;
  }
}
