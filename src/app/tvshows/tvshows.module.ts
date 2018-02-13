import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TvShowsSearchViewComponent,
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
    TvShowsSearchViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvPosterComponent,
    TvShowsSelectedViewComponent,
    TvShowDetailPageComponent,
  ],

  exports: [
    TvShowsSearchViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvPosterComponent,
    TvShowDetailPageComponent,
  ],

  providers: [TvShowSelectors]
})
export class TvshowsModule { }
