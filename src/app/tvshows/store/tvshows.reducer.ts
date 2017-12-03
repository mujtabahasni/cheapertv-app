import { ActionTypes, TypeKeys } from './tvshows.actions'
import { TvShowData } from './tvshows.models'

export interface State {
  isFetching: boolean;
  searchResults: TvShowData[];
}

export const initialState: State = {
  isFetching: false,
  searchResults: [],
}

export function reducer(state: State = initialState, action: ActionTypes) {
  switch(action.type){
    case TypeKeys.SEARCH_SHOWS:
      return {
        isFetching: true,
        searchResults: []
      };
    case TypeKeys.SEARCH_SHOWS_SUCCESS:
      return {
        isFetching: false,
        searchResults: action.by
      };
    default:
      return state;
  }
}