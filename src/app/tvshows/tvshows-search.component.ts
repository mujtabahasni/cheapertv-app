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
  <form action="javascript:void(0)">
    <input type="text" (change)="search($event.target.value)" placeholder="Show Title">
    <input type="submit">
  </form>

  <div *ngIf="selectors.isFetching$ | async">
    <progress value="80" max="100">fetching...</progress>
  </div>

  <div *ngIf="(selectors.errors$ | async).length !== 0">
    <h4>Error:</h4>
    <ul>
      <li *ngFor="let error of (selectors.errors$ | async)">{{ error }}</li>
    </ul>
  </div>

  <ul>
    <li *ngFor="let show of (selectors.tvshows$ | async)">{{ show.title }}</li>
  </ul>
  `
})
export class TvShowsSearchViewComponent {

  readonly selectors = TvShowSelectors;

  constructor (
    private store: NgRedux<RootState>,
    private tvdb: TvDbService) {
  }

  search(query) {
   this.store.dispatch(searchShows(query, this.tvdb));
  }
}
