import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {
  TvShowsSearchViewComponent,
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
    component: TvShowsSearchViewComponent,
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
