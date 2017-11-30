import { Component } from '@angular/core';
import { TvDbService } from '../core'

@Component({
  selector: 'tv-shows-search',
  template: `
  <h1>{{name}}</h1>
  <ul>
  `
})
export class TvShowsSearchViewComponent {
  name = 'mujtaba';
  constructor(public tvdb: TvDbService) {
  }
}