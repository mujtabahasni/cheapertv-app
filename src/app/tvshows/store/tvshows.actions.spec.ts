import * as actions from './tvshows.actions';
import { TvShowData } from './tvshows.models';

describe('TV Show Actions', () => {

  describe('searchError', () => {
    it('create a SEARCH_SHOWS_FAILURE action', () => {
      const payload = 'Payload';
      const result = actions.searchError(payload);
      expect(result).toEqual({
        type: actions.SearchActionTypes.SEARCH_SHOWS_FAILURE,
        payload: payload
      });
    });
  });

  describe('searchSuccess', () => {
    it('create a SEARCH_SHOWS_SUCCESS action', () => {
      const payload:TvShowData[] = [ {id:'1', title:'title' }]
      const result = actions.searchSuccess(payload);
      expect(result).toEqual({
        type: actions.SearchActionTypes.SEARCH_SHOWS_SUCCESS,
        payload: payload
      });
    });
  });

  describe('searchShows', () => {
    it('create a SEARCH_SHOWS_REQUESTED action', () => {
      const payload = 'Payload';
      const result = actions.searchShows(payload);
      expect(result).toEqual({
        type: actions.SearchActionTypes.SEARCH_SHOWS_REQUESTED,
        payload: payload
      });
    });
  });
});
