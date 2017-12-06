import { Component, Input } from '@angular/core';
import { TvShowData } from './store/tvshows.models';

@Component( {
  selector: 'app-tvshow-poster',
  template: `
  <table border="1" style="display:inline-block">
    <tr>
      <td><h4>{{ show.title }}</h4></td>
    </tr>
    <tr>
      <td><img [src]="show.posterUrl"></td>
    </tr>
  </table>
  `,
})
export class TvShowsTvDataComponent {
  @Input() show: TvShowData;
}
