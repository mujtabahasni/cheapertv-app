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
  selector: 'app-tvshows-view',
  template: `
  <app-tvshows-search-input
    [fetching] = "selectors.isFetching$ | async"
    [errors] = "selectors.errors$ | async"
    (search) = "search($event)"
    ></app-tvshows-search-input>
    <h4><i>Search Results for "{{ selectors.searchQuery$ | async }}"</i></h4>
  <div class="vh-50 w-100 overflow-x-scroll" *ngIf="(selectors.tvshows$ | async).length > 0">
   <div class="h-50 nowrap justify">
    <app-tvshow-poster *ngFor="let show of (selectors.tvshows$ | async)" [show]="show"></app-tvshow-poster>
   </div>
  </div>
  <hr>
  <h4><i>Selected Shows</i></h4>
  <div class="vh-50 w-100 overflow-x-scroll">
   <div class="h-50 nowrap">
    <app-tvshows-selected [selectedShows] = "selectedShows" ></app-tvshows-selected>
   </div>
  `
})
export class TvShowsViewComponent implements OnInit {

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
      const observables = selectedIds.map(id => this.tvdb.details(String(id)));
      combineLatest(observables)
        .subscribe((selectedShows) => {
          this.selectedShows = selectedShows;
        });
    });
  }
  search(query) {
   this.store.dispatch(searchShows(query));
  }
}
