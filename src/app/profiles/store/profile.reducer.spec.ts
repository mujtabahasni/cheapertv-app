import * as profile from './profile.reducer';
import * as action from './profile.actions';


describe('Profile reducer actions', () => {
  let state: profile.ProfileState;

  beforeEach(() => {
    state = profile.reducer(undefined, {} as any);
    state.selectedShows = [215, 216, 217];
  });

  it('should return the default state if action is undefined', () => {
    state = profile.reducer(undefined, {} as any);
    expect(state).toEqual(profile.initialProfileState);
  });

  it('should handle SELECTED_SHOWS_ADD action', () => {
    expect( profile.reducer(state, action.addToSelectedShows([218, 219])) )
    .toEqual({
      ...state,
      selectedShows: [215, 216, 217, 218, 219]
    });
  });

  it('should handle SELECTED_SHOWS_DELTE action', () => {
    expect( profile.reducer(state, action.removeFromSelectedShows([216])))
    .toEqual({
      ...state,
      selectedShows: [215, 217]
    });
  });
});
