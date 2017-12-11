import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import thunk from 'redux-thunk';

import { TvDbService } from './services';
import { AppContainerComponent } from './app.container';

import {
  TvShowsSearchViewComponent,
  TvShowsSearchInputComponent,
  TvShowsTvDataComponent,
  TvShowDetailComponent,
  TvShowSelectors,
} from './tvshows';

import { rootReducer, RootState, initialRootState } from './store';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppContainerComponent,
    TvShowsSearchViewComponent,
    TvShowsSearchInputComponent,
    TvShowsTvDataComponent,
    TvShowDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [TvDbService, TvShowSelectors],
  bootstrap: [AppContainerComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<RootState>, devtools: DevToolsExtension) {
    if (devtools.isEnabled) {
      ngRedux.configureStore(rootReducer, initialRootState, [thunk], [devtools.enhancer()]);
    } else {
      ngRedux.configureStore(rootReducer, initialRootState, [thunk]);
    }
  }
}
