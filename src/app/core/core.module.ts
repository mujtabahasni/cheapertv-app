import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TvDbService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],

  providers: [TvDbService]
})
export class CoreModule { }
