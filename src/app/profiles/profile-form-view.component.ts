import { sortByProp } from '../shared/utils';
import { Component } from '@angular/core';
import { constants } from './profile-constants';
import { ProfileSelectors } from './store/profile.selectors';

@Component({
  selector: 'app-profile-form-view',
  template: `
    <app-profile-form
      [home]="selectors.home | async"
      [membersNum]="selectors.membersNum | async"
      [cities]="cities"
      [services]="services"
      ></app-profile-form>
    `
})
export class ProfileFormViewComponent {
  selectors = ProfileSelectors;
  services = constants.services;
  cities = sortByProp('name', constants.cities).map((x) => x.name);
}
