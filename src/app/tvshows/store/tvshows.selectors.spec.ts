import { getSortedResults, getErrors, getIsFetching } from './tvshows.selectors';
import { RootState, rootReducer } from '../../store/root.reducer';

describe('TvShowSelectors', () => {
  let state: RootState;

  beforeEach( () => {
    state = rootReducer(undefined, {} as any);
  });

  describe('getSortedResults()', () => {
    it('should return a list of search results sorted by title', () => {
      state.tvshows.searchResults = [
        {id: '1', title: 'c'},
        {id: '1', title: 'd'},
        {id: '1', title: 'b'},
        {id: '1', title: 'a'},
        {id: '1', title: 'd'},
      ];

      expect(getSortedResults(state)).toEqual([
        {id: '1', title: 'a'},
        {id: '1', title: 'b'},
        {id: '1', title: 'c'},
        {id: '1', title: 'd'},
        {id: '1', title: 'd'},
      ]);
    });
  });

  describe('getErrors()', () => {
    it('should return a list of search errors', () => {
      state.tvshows.errors = ['error'];
      expect(getErrors(state)).toEqual(state.tvshows.errors);
    });
  });

  describe('getIsFetching()', () => {
    it('should return a list of search errors', () => {
      state.tvshows.isFetching = true;
      expect(getIsFetching(state)).toEqual(state.tvshows.isFetching);
    });
  });
});
