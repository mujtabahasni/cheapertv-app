import { Component } from '@angular/core';
import { NgRedux} from '@angular-redux/store';

import { RootState } from '../store';

@Component({
  selector: 'app-selected-tvshows',
  template: ``
})
export class ProfileSelectedShowsComponent {
  constructor(store: NgRedux<RootState>) {
  }
}
