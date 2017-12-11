import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {
  TvShowsSearchViewComponent,
  TvShowDetailComponent,
  TvShowSelectors,
} from './tvshows';

const routes: Routes = [
  {
    path: 'details',
    component: TvShowDetailComponent,
  },
  {
    path: '',
    component: TvShowsSearchViewComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
