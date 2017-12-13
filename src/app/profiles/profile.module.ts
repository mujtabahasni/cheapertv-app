import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReduxModule } from '../redux/redux.module';

import {
    ProfileFormViewComponent,
    ProfileFormComponent,
} from './index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReduxModule,
  ],
  declarations: [
    ProfileFormViewComponent,
    ProfileFormComponent,
  ]
})
export class ProfilesModule {}
