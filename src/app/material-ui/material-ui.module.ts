import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatChipsModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
  ]
})
export class MaterialUiModule {}


