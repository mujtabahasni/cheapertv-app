import * as tvshows from '../index';
import { TvShowData } from './tvshows.models';

describe('The tvshows feature', () => {
    let state;

    beforeEach(() => {
      state = tvshows.reducer(undefined, {type: undefined, by: undefined});
    });

    it('should return the initial state if action is undefined', () => {
      state = tvshows.reducer(undefined, {type: undefined, by: undefined});
      expect(state).toEqual(tvshows.initialState);
    });

    describe('The SEARCH_SHOWS Action', () => {
      const action = {
        type: tvshows.TypeKeys.SEARCH_SHOWS,
        by: 'querystring'
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
        type: tvshows.TypeKeys.SEARCH_SHOWS_SUCCESS,
        by: [{title: 'rick and morty'}] as TvShowData[],
      } as tvshows.TvShowSearchSuccess;

      it('should set the search results state to search results', () => {
        const result = tvshows.reducer(state, action);
        expect(result.searchResults).toEqual(action.by);
      });

      it('should set the fetching state to false', () => {
        const result = tvshows.reducer(state, action);
        expect(result.isFetching).toBeFalsy();
      });

    });
});
