import { Component, Input } from '@angular/core';
import { TvShowData } from './store/tvshows.models';

@Component( {
  selector: 'app-tvshow-poster',
  template: `
  <a routerLink="details/{{show.id}}">
    <div style="border:1px solid black; margin: 5px 5px; display: inline-block">
      <div>
        <span style="text-align: center"><h4>{{ show.title }}</h4></span>
      </div>
      <div>
        <span><img [src]="show.posterUrl"></span>
      </div>
    </div>
  </a>
  `,
})
export class TvShowsTvDataComponent {
  @Input() show: TvShowData;
}
