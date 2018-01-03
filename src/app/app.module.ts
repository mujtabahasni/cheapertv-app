import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TvDbService } from './services';
import { AppContainerComponent } from './app.container';
import { ReduxModule } from './redux/redux.module';
import {
  TvShowsSearchViewComponent,
  TvShowsSearchInputComponent,
  TvShowsTvDataComponent,
  TvShowDetailPageComponent,
  TvShowSelectors,
} from './tvshows';

import { ProfilesModule } from './profiles/profile.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppContainerComponent,
    TvShowsSearchViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvDataComponent,
    TvShowDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReduxModule,
    ProfilesModule,
  ],
  providers: [TvDbService, TvShowSelectors],
  bootstrap: [AppContainerComponent],
})
export class AppModule { }
