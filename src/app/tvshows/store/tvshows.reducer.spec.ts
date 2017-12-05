import * as tvshows from '../index';
import { TvShowData } from './tvshows.models';

describe('TvShows Reducer', () => {
    let state;

    beforeEach(() => {
      state = tvshows.reducer(undefined, {type: undefined, payload: undefined});
    });

    it('should return the initial state if action is undefined', () => {
      state = tvshows.reducer(undefined, {type: undefined, payload: undefined});
      expect(state).toEqual(tvshows.initialState);
    });

    describe('The SEARCH_SHOWS_REQUESTEDAction', () => {
      const action = {
        type: tvshows.SearchActionTypes.SEARCH_SHOWS_REQUESTED,
        payload: 'querystring'
      } as tvshows.TvShowSearchShows;

      it('should set the fetching state to true', () => {
        const result = tvshows.reducer(state, action);
        expect(result.isFetching).toBeTruthy();
      });

      it('should set the search results state to empty', () => {
        const result = tvshows.reducer(state, action);
        expect(result.searchResults).toEqual([]);
      });
    });

    describe('The SEARCH_SHOWS_SUCCESS Action', () => {
      const action = {
        type: tvshows.SearchActionTypes.SEARCH_SHOWS_SUCCESS,
        payload: [{title: 'rick and morty'}] as TvShowData[],
      } as tvshows.TvShowSearchSuccess;

      it('should set the search results state to search results', () => {
        const result = tvshows.reducer(state, action);
        expect(result.searchResults).toEqual(action.payload);
      });

      it('should set the fetching state to false', () => {
        const result = tvshows.reducer(state, action);
        expect(result.isFetching).toBeFalsy();
      });

    });
});
