import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { TvDbService } from '../core/services';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../store';
import { searchShows } from './store/tvshows.actions';
import { TvShowSelectors } from './store/tvshows.selectors';
import { ProfileSelectors } from '../profiles/store';
import { TvShowData } from './store/tvshows.models';
import { promise } from 'selenium-webdriver';

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
  <div *ngIf="(selectors.tvshows$ | async).length > 0">
  <h4><i>Search Results for "{{ selectors.searchQuery$ | async }}"</i></h4>
    <app-tvshow-poster *ngFor="let show of (selectors.tvshows$ | async)" [show]="show"></app-tvshow-poster>
  </div>
  <hr>
  <app-tvshows-selected [selectedShows] = "selectedShows" ></app-tvshows-selected>
  `
})
export class TvShowsSearchViewComponent implements OnInit {

  readonly tvshows$ = TvShowSelectors.tvshows$;
  readonly isFetching$ = TvShowSelectors.isFetching$;

  readonly selectors = TvShowSelectors;
  selectedShows$: Observable<TvShowData[]>;
  selectedShows: TvShowData[];
  constructor(
    private store: NgRedux<RootState>,
    private tvdb: TvDbService) {}

  ngOnInit() {
    ProfileSelectors.selectedShows$.subscribe(selectedIds => {
      const observables = selectedIds.map(id => this.tvdb.details(String(id));
      combineLatest(observables)
        .subscribe((selectedShows) => {
          this.selectedShows = selectedShows;
        });
    });
  }
  search(query) {
   this.store.dispatch(searchShows(query, this.tvdb));
  }
}
