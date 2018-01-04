import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TvShowsSearchViewComponent,
  TvShowsSearchInputComponent,
  TvShowsTvDataComponent,
  TvShowDetailComponent,
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
    TvShowDetailComponent,
  ],

  exports: [
    TvShowsSearchViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvDataComponent,
    TvShowDetailComponent,
  ],

  providers: [TvShowSelectors]
})
export class TvshowsModule { }
