import { TvShowActions, SearchActionTypes } from './tvshows.actions';
import { TvShowData } from './tvshows.models';

export interface State {
  isFetching: boolean;
  searchQuery?: string;
  searchResults?: TvShowData[];
  errors?: string[];
}

export const initialState: State = {
  isFetching: false,
  searchResults: [],
  errors: [],
};

export function reducer(state: State = initialState, action: TvShowActions) {
  switch (action.type) {
    case SearchActionTypes.SEARCH_SHOWS_REQUESTED:
      return {
        ...state,
        isFetching: true,
        searchQuery: action.payload,
        searchResults: [],
        errors: [],
      };
    case SearchActionTypes.SEARCH_SHOWS_SUCCESS:
      return {
        ...state,
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
