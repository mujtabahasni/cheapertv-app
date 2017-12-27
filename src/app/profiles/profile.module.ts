import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgReduxFormConnectModule } from '@angular-redux/form';

import {
    ProfileFormViewComponent,
    ProfileFormComponent,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgReduxFormConnectModule,
  ],
  declarations: [
    ProfileFormViewComponent,
    ProfileFormComponent,
  ]
})
export class ProfilesModule {}
