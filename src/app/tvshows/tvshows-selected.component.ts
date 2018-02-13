import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvDbService } from '../core/services';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../store';
import { searchShows } from './store/tvshows.actions';
import { TvShowData } from './store/tvshows.models';

import { ProfileSelectors } from '../profiles/store';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-tvshows-selected',
  template: `
  <div *ngIf="selectedShows.length > 0">
  <h4><i>Selected Shows</i></h4>
    <app-tvshow-poster *ngFor="let show of selectedShows" [show]="show"></app-tvshow-poster>
  </div>
  `
})
export class TvShowsSelectedViewComponent {
  @Input() selectedShows: TvShowData[];
}
