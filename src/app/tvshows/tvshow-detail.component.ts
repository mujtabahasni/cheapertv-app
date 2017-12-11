import { Component, OnInit } from '@angular/core';
import { TvShowData } from './store/tvshows.models';
import { TvDbService } from '../services';

@Component({
  template: `
  <article class="card">
    <header>
      <h1>{{ show.title }}</h1>
    </header>
    <img class="poster" [src]="show.posterURL">
    <summary>
      {{ show.summary }}
    </summary>
  </article>
  `
})
export class TvShowDetailComponent implements OnInit {
  show: TvShowData = {title: 'no title', summary: 'no summary', posterUrl: 'no image'};
  constructor(private tvdb: TvDbService) {}

  ngOnInit() {
    this.tvdb.search('Rick and Morty')
      .toPromise()
      .then( (shows: TvShowData[]) => {
        this.show = shows[0];
      });
  }
}
