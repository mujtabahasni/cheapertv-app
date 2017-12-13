import { Observable } from 'rxjs/Observable';
import { ProfileState, initialProfileFormState } from './profile.reducer';
import * as profile from './profile.selectors';
import { RootState, initialRootState } from '../../store/';

describe('ProfileSelectors', () => {
  describe('home selector', () => {
    const state: RootState = {
      ...initialRootState,
      profiles: {
        form: {
          ...initialProfileFormState,
          home: 'apartment',
          membersNum: '5',
        }
      }
    };
    it('should return the state of the home field', () => {
      const result = profile.getProfileFormHome(state);
      expect(result).toEqual('apartment');
    });
    it('should return the state of the membersNum field', () => {
      const result = profile.getProfileFormMembersNum(state);
      expect(result).toEqual(5);
    });
  });
});
