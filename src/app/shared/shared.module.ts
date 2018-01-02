import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
  ],
})
export class SharedModule { }
