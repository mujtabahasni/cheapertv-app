import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialUiModule } from '../material-ui/material-ui.module';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    MaterialUiModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    MaterialUiModule,
  ],
})
export class SharedModule { }
