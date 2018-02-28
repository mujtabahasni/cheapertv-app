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

@Component({
  selector: 'app-tvshows-view',
  template: `
  <app-tvshows-search-input
    [fetching] = "selectors.isFetching$ | async"
    [errors] = "selectors.errors$ | async"
    (search) = "search($event)"
    ></app-tvshows-search-input>

  <section>
   <mat-card class="ma2">
      <mat-card-title>Search Results for "{{ selectors.searchQuery$ | async }}"</mat-card-title>
      <div class="w-100 overflow-x-scroll" *ngIf="(selectors.tvshows$ | async).length > 0">
        <div class="nowrap justify">
          <app-tvshow-poster *ngFor="let show of (selectors.tvshows$ | async)" [show]="show"></app-tvshow-poster>
        </div>
      </div>
    </mat-card>
  </section>
  <section>
   <mat-card class="ma2">
    <mat-card-title>Selected Shows</mat-card-title>
      <div class="w-100 overflow-x-scroll">
        <div class="nowrap">
          <app-tvshows-selected [selectedShows] = "selectedShows" ></app-tvshows-selected>
        </div>
      </div>
    </mat-card>
   </section>
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
