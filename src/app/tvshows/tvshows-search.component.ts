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
  <a href="/profile">Edit Profile</a>
  <app-tvshows-search-input (search)="search($event)"></app-tvshows-search-input>
  <div *ngIf="(selectors.errors$ | async).length !== 0">
    <h4>Error:</h4>
    <ul>
      <li *ngFor="let error of (selectors.errors$ | async)">{{ error }}</li>
    </ul>
  </div>
  <div *ngIf="(selectors.tvshows$ | async).length > 0">
  <h4><i>Search Results for "{{ selectors.searchQuery$ | async }}"</i></h4>
    <app-tvshows-poster *ngFor="let show of (selectors.tvshows$ | async)" [show]="show"></app-tvshows-poster>
  </div>
  `
})
export class TvShowsSearchViewComponent {

  readonly tvshows$ = TvShowSelectors.tvshows$;
  readonly isFetching$ = TvShowSelectors.isFetching$;
  readonly selectors = TvShowSelectors;

  constructor (
    private store: NgRedux<RootState>,
    private tvdb: TvDbService) {
  }

  search(query) {
   this.store.dispatch(searchShows(query, this.tvdb));
  }
}
