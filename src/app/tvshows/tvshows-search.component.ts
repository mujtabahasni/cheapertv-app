import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvDbService } from '../services';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../store';
import { searchShows } from './store/tvshows.actions';
import { TvShowSelectors } from './store/tvshows.selectors';
import { TvShowData } from './store/tvshows.models';

@Component({
  selector: 'app-tvshows-search',
  template: `
  <app-tvshows-search-input (search) = "search($event)" [fetching] = "isFetching$ | async"></app-tvshows-search-input>
  <app-tvshow-poster *ngFor = "let show of (tvshows$ | async)" [show]="show"></app-tvshow-poster>
  `
})
export class TvShowsSearchViewComponent {

  readonly tvshows$ = TvShowSelectors.tvshows$;
  readonly isFetching$ = TvShowSelectors.isFetching$;

  constructor (
    private store: NgRedux<RootState>,
    private tvdb: TvDbService) {
  }

  search(query) {
   this.store.dispatch(searchShows(query, this.tvdb));
  }
}
