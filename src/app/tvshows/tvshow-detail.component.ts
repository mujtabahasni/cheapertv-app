import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TvShowData } from './store/tvshows.models';
import { TvDbService } from '../services';

@Component({
  template: `
  <article class="card">
    <header>
      <h1>{{ show.title }}</h1>
    </header>
    <img class="poster" [src]="show.posterUrl">
    <summary [innerHTML]="show.summary">
    </summary>
  </article>
  `
})
export class TvShowDetailComponent implements OnInit {
  show: TvShowData = {id: 'noid', title: 'no title', summary: 'no summary', posterUrl: 'no image'};
  constructor (
    private route: ActivatedRoute,
    private tvdb: TvDbService,
    private location: Location,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tvdb.details(id)
      .toPromise()
      .then( show => this.show = show );
  }
}
