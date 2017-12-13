import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {
  TvShowsSearchViewComponent,
  TvShowDetailComponent,
  TvShowSelectors,
} from './tvshows';

import { ProfileFormViewComponent } from './profiles';

const routes: Routes = [
  {
    path: 'details/:id',
    component: TvShowDetailComponent,
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
