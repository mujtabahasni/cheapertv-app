import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TvDbService, PersistorService, OtaService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],

})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule ) {
    if (parentModule) {
      throw new Error('CoreModule must only be loaded by AppModule!');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TvDbService, PersistorService, OtaService],
    };
  }
}
