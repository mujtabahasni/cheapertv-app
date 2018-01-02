import * as profile from './profile.reducer';


describe('Profile reducer', () => {
  let state: profile.ProfileState;

  it('should return the default state if action is undefined', () => {
    state = profile.reducer(undefined, {} as any);
    expect(state).toEqual(profile.initialProfileState);
  });
});
