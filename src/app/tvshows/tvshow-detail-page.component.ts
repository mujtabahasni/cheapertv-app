import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { indexOf } from 'ramda';

import { RootState } from '../store';
import { ProfileSelectors } from '../profiles/store';
import { addToSelectedShows, removeFromSelectedShows } from '../profiles/store/profile.actions';
import { TvShowData } from './store/tvshows.models';
import { TvDbService } from '../core/services';

@Component({
  template: `
  <article class="card">
    <header>
      <h1>{{ show.title }}</h1>
    </header>
    <img *ngIf="show.posterUrl" class="poster" [src]="show.posterUrl">
    <div class="action-buttons">
      <button
        *ngIf="isShowSelected === false; else delete"
        (click)="handleAddButton(show.id)" class="add"
        >Add</button>
      <ng-template #delete>
        <button
          (click)="handleDeleteButton(show.id)" class="delete"
          >Delete</button>
       </ng-template>
    </div>
    <div>
      <a routerLink="/">Go Back</a>
    </div>
    <summary [innerHTML]="show.summary">
    </summary>
  </article>
  `
})
export class TvShowDetailPageComponent implements OnInit {
  show: TvShowData = {id: 'noid', title: 'no title', summary: 'no summary'};
  isShowSelected = false;

  constructor (
    private store: NgRedux<RootState>,
    private route: ActivatedRoute,
    private tvdb: TvDbService,
    private location: Location,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    ProfileSelectors.selectedShows$.subscribe((selectedShows) => {
      this.isShowSelected = (indexOf(Number(id), selectedShows) !== -1);
    });

    this.tvdb.details(id)
      .toPromise()
      .then( show => this.show = show );
  }

  handleAddButton(showId) {
    this.store.dispatch(addToSelectedShows([showId]));
  }

  handleDeleteButton(showId) {
    this.store.dispatch(removeFromSelectedShows([showId]));
  }
}
