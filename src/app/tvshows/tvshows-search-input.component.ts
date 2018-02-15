
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tvshows-search-input',
  template: `
  <form action="javascript:void(0)">
    <input type="text" (change)="handleChange($event.target.value)" placeholder="Show Title">
    <input type="submit">
  </form>
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
