import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TvShowsSearchViewComponent,
  TvShowsSearchInputComponent,
  TvShowsTvDataComponent,
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
    TvShowsTvDataComponent,
    TvShowDetailPageComponent,
  ],

  exports: [
    TvShowsSearchViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvDataComponent,
    TvShowDetailPageComponent,
  ],

  providers: [TvShowSelectors]
})
export class TvshowsModule { }
