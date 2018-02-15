import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TvShowsSearchViewComponent,
  TvShowsSearchInputComponent,
  TvShowsTvPosterComponent,
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
