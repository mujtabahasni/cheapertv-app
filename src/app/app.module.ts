import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from './store/store.module';

import { AppContainerComponent } from './app.container';

import { ProfilesModule } from './profiles/profile.module';
import { TvshowsModule } from './tvshows/tvshows.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    StoreModule,
    AppRoutingModule,
    ProfilesModule,
    TvshowsModule,
    CoreModule.forRoot(),
  ],
  declarations: [AppContainerComponent],
  bootstrap: [AppContainerComponent],
})
export class AppModule { }
