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
  <mat-card class="mw5 mw6-ns h-50 center pa3 show-details-card">
      <img mat-card-image *ngIf="show.posterUrl" [src]="show.posterUrl">
    <mat-card-title-group>
      <mat-card-title>{{ show.title }}</mat-card-title>
    </mat-card-title-group>
    <mat-card-content [innerHTML]="show.summary">
    </mat-card-content>
    <mat-card-actions class="action-buttons">
      <button mat-raised-button routerLink="/">Go Back</button>
      <button mat-raised-button color="primary"
        *ngIf="isShowSelected === false; else delete"
        (click)="handleAddButton(show.id)" class="add"
        >Add</button>
      <ng-template #delete>
        <button mat-raised-button color="warn"
          (click)="handleDeleteButton(show.id)" class="delete"
          >Delete</button>
       </ng-template>
    </mat-card-actions>
  </mat-card>
  `
})
export class TvShowDetailPageComponent implements OnInit {
  show: TvShowData = {id: 'noid', title: 'no title', summary: 'no summary'};
  isShowSelected = false;

  constructor (
    private store: NgRedux<RootState>,
    private route: ActivatedRoute,
    private tvdb: TvDbService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    ProfileSelectors.selectedShows$.subscribe((selectedShows) => {
      console.log({selectedShows})
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
