import { Component, Input } from '@angular/core';
import { TvShowData } from './store/tvshows.models';

@Component( {
  selector: 'app-tvshow-poster',
  template: `
  <a class = "dib b--black bw2" routerLink="details/{{show.id}}">
    <div class="h-100 dib ma0">
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
