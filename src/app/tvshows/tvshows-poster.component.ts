import { Component, Input } from '@angular/core';
import { TvShowData } from './store/tvshows.models';

@Component( {
  selector: 'app-tvshow-poster',
  template: `
  <a class = "dib h-100" routerLink="details/{{show.id}}">
    <div class="h-100" style="border:1px solid black; margin: 5px 5px; display: inline-block">
      <span style="text-align: center"><h4>{{ show.title }}</h4></span>
      <!--<div class="h-100 contain" [style.background-image] = "'url(' + show.posterUrl + ')'">-->
      <div>
       <img [src]="show.posterUrl">
      </div>
    </div>
  </a>
  `,
})
export class TvShowsTvPosterComponent {
  @Input() show: TvShowData;
}
