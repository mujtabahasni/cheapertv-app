import { select } from '@angular-redux/store';
import { RootState } from '../../store';
import { Observable } from 'rxjs/Observable';
import { compose, min } from 'ramda';

export class ProfileSelectors {
  @select(['profiles', 'form', 'home']) static readonly home: Observable<string>;
  @select(['profiles', 'form', 'membersNum']) static readonly membersNum: Observable<string>;
}

