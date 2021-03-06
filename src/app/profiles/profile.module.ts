import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgReduxFormConnectModule } from '@angular-redux/form';

import {
    ProfileFormViewComponent,
    ProfileFormComponent,
} from './index';

import {
  ProfileFormServicesComponent,
  ProfileFormDevicesComponent,
  ProfileFormHomeComponent,
  ProfileFormAntennaComponent,
  ProfileFormMembersComponent,
  ProfileFormSubmitComponent,
} from './form-sections';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgReduxFormConnectModule,
  ],
  declarations: [
    ProfileFormViewComponent,
    ProfileFormComponent,
    ProfileFormServicesComponent,
    ProfileFormDevicesComponent,
    ProfileFormHomeComponent,
    ProfileFormAntennaComponent,
    ProfileFormMembersComponent,
    ProfileFormSubmitComponent,
  ]
})
export class ProfilesModule {}
