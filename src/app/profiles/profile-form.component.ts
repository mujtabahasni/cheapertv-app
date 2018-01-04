import { Component, Input } from '@angular/core';
import { constants } from './profile-constants';

@Component({
  selector: 'app-profile-form',
  template: `
  <h1>Profile Settings</h1>
  <p>
    All of these fields are optional and none of this information will be transmitted.
    The information you provide will help find a best fitting solution for your needs.
  </p>
  <app-profile-form-services [services]="services"></app-profile-form-services>
  <app-profile-form-devices></app-profile-form-devices>
  <app-profile-form-home [cities]="cities"></app-profile-form-home>
  <app-profile-form-antenna [home]="home"></app-profile-form-antenna>
  <app-profile-form-members [membersNum]="membersNum"></app-profile-form-members>
  <app-profile-form-submit></app-profile-form-submit>
 `
})
export class ProfileFormComponent {
  @Input() services: {
    tv: object[],
    streaming: object[]
  };
  @Input() cities: string[];
  @Input() home: string;
  @Input() membersNum: string;
}
