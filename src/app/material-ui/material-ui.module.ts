import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class MaterialUiModule {}


