import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppContainer } from './app.container'
import { TvShowsSearchViewComponent } from './tvshows';

@NgModule({
  declarations: [
    AppContainer,
    TvShowsSearchViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
