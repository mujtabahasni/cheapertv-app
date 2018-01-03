import { TvShowData } from '../../tvshows/store/tvshows.models';

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
  selectedShows: TvShowData[];
}

export const initialProfileState = {
  form: initialProfileFormState,
  selectedShows: [],
};

export function reducer (state = initialProfileState, action) {
  return state;
}
