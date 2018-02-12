import { TvShowData } from '../../tvshows/store/tvshows.models';
import { ProfileActionTypes } from './profile.actions'

export interface ProfileFormState {
  tv: string;
  streaming: object;
  city: string;
  address: string;
  postal: string;
  home: string;
  antenna: string;
  apartmentFloor: string;
  membersNum: string;
}

export const initialProfileFormState: ProfileFormState = {
  tv: '',
  streaming: {},
  city: '',
  address: '',
  postal: '',
  home: '',
  antenna: '',
  apartmentFloor: '0',
  membersNum: '0',
};

export interface ProfileState {
  form: ProfileFormState;
  selectedShows: number[];
}

export const initialProfileState = {
  form: initialProfileFormState,
  selectedShows: [],
};

export function reducer (state = initialProfileState, action) {
  switch (action.type) {
    case ProfileActionTypes.SELECTED_SHOWS_ADD:

      if (state.selectedShows.indexOf(action.payload) < 0) {
        return {
          ...state,
          selectedShows: [...state.selectedShows, action.payload]
        };
      } else {
        return state;
      }

      case ProfileActionTypes.PROFILE_CLEAR:
        return initialProfileState;

      default:
        return state;
  }
}
