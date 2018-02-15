import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {
  TvShowsViewComponent,
  TvShowDetailPageComponent,
  TvShowSelectors,
} from './tvshows';

import { ProfileFormViewComponent } from './profiles';

const routes: Routes = [
  {
    path: 'details/:id',
    component: TvShowDetailPageComponent,
  },
  {
    path: '',
    component: TvShowsViewComponent,
  },
  {
    path: 'profile',
    component: ProfileFormViewComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
