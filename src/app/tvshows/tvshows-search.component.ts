import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvDbService } from '../services';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../store';
import { searchShows } from './store/tvshows.actions';
import { TvShowSelectors } from './store/tvshows.selectors';
import { TvShowData } from './store/tvshows.models';

@Component({
  selector: 'app-shows-search',
  template: `
  <form action="javascript:void(0)">
    <input type="text" (change)="search($event.target.value)" placeholder="Show Title">
    <input type="submit">
  </form>
  <div *ngIf="selectors.isFetching$ | async">
    <progress value="80" max="100">fetching...</progress>
  </div>
    <table border="1" style="display:inline-block" *ngFor="let show of (selectors.tvshows$ | async)">
    <tr>
      <td><h4>{{ show.title }}</h4></td>
    </tr>
    <tr>
     <td><img [src]="show.posterUrl"></td>
    </tr>
  `
})
export class TvShowsSearchViewComponent {

  constructor (
    public selectors: TvShowSelectors,
    private store: NgRedux<RootState>,
    private tvdb: TvDbService) {
  }

  search(query) {
   this.store.dispatch(searchShows(query, this.tvdb));
  }
}
