import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { RootState } from './store';
import { clearProfile } from './profiles/store/profile.actions';
import { PersistorService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html'
})
export class AppContainerComponent {
  title = 'tvapp';

  constructor(public store: NgRedux<RootState>, public storage: PersistorService) { }

  purge() {
    this.store.dispatch( clearProfile() );
  }
}
