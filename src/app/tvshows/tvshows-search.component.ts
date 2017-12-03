import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvDbService } from '../core';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../store';
import { searchShows } from './store/tvshows.actions';
import { TvShowData } from './store/tvshows.models';

@Component({
  selector: 'app-shows-search',
  template: `
  <input type="text" (change)="search($event.target.value)">
  <div>is Fetching: {{ isFetching$ | async }} </div>
  <ul>
    <li *ngFor="let show of (tvshows$ | async)">{{ show.title }}</li>
  </ul>
  `
})
export class TvShowsSearchViewComponent {
 @select(['tvshows', 'searchResults']) readonly tvshows$: Observable<TvShowData[]>;
 @select(['tvshows', 'isFetching']) readonly isFetching$: Observable<boolean>;

  constructor(private store: NgRedux<RootState>, private tvdb: TvDbService) {
  }

  search(query) {
   this.store.dispatch(searchShows(query, this.tvdb));
  }
}
