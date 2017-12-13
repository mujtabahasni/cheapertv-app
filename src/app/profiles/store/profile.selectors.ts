import { select } from '@angular-redux/store';
import { RootState } from '../../store';
import { Observable } from 'rxjs/Observable';

export class ProfileSelectors {
  @select(getProfileFormHome) static readonly home: Observable<string>;
  @select(getProfileFormMembersNum) static readonly membersNum: Observable<string>;
}

export function getProfileFormHome(state: RootState) {
  return state.profiles.form.home;
}

export function getProfileFormMembersNum(state: RootState) {
  const num = Number(state.profiles.form.membersNum);
  return Math.max(0, num);
}
