import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ReduxModule } from './redux/redux.module';

import { AppContainerComponent } from './app.container';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ReduxModule,
    AppRoutingModule,
  ],
  declarations: [AppContainerComponent],
  bootstrap: [AppContainerComponent],
})
export class AppModule { }
