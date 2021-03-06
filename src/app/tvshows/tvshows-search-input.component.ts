
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tvshows-search-input',
  template: `
  <div class="center mw5">
    <form action="javascript:void(0)">
    <mat-icon>search</mat-icon>
    <mat-form-field>
      <input matInput type="text" (change)="handleChange($event.target.value)" placeholder="Search Title">
      </mat-form-field>
    </form>
  </div>
  <div *ngIf="fetching">
    <progress value="80" max="100">fetching...</progress>
  </div>

  <div *ngIf="errors.length !== 0">
    <h4>Error:</h4>
    <ul>
      <li *ngFor="let error of errors">{{ error }}</li>
    </ul>
  </div>
  `
})

export class TvShowsSearchInputComponent {
  @Input() fetching: boolean;
  @Input() errors: string[];
  @Output() search = new EventEmitter<string>();

  handleChange(value: string) {
    this.search.emit(value);
  }
}
