import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesModule } from '../profiles/profile.module';
import { TvshowsModule } from '../tvshows/tvshows.module';
import { TvDbService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    ProfilesModule,
    TvshowsModule,
  ],

  providers: [TvDbService]
})
export class CoreModule { }
