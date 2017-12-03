import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import thunk from 'redux-thunk';

import { TvDbService } from './core/tvdb.service';
import { AppContainer } from './app.container'
import { TvShowsSearchViewComponent } from './tvshows';
import { rootReducer, RootState, initialRootState } from './store';

@NgModule({
  declarations: [
    AppContainer,
    TvShowsSearchViewComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
  ],
  providers: [TvDbService],
  bootstrap: [AppContainer]
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
