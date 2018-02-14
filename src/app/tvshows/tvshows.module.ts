import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TvShowsViewComponent,
  TvShowsSearchInputComponent,
  TvShowsTvPosterComponent,
  TvShowsSelectedViewComponent,
  TvShowDetailPageComponent,
  TvShowSelectors,
} from '../tvshows';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TvShowsViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvPosterComponent,
    TvShowsSelectedViewComponent,
    TvShowDetailPageComponent,
  ],

  exports: [
    TvShowsViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvPosterComponent,
    TvShowDetailPageComponent,
  ],

  providers: [TvShowSelectors]
})
export class TvshowsModule { }
