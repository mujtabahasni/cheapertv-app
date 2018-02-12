
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tvshows-search-input',
  template: `
  <form action="javascript:void(0)">
    <input type="text" (change)="handleChange($event.target.value)" placeholder="Enter a Show Title">
    <input type="submit">
  </form>
  <div *ngIf="fetching">
    <progress value="80" max="100">fetching...</progress>
  </div>
  `
})

export class TvShowsSearchInputComponent {
  @Input() fetching: boolean;
  @Output() search = new EventEmitter<string>();

  handleChange(value: string) {
    this.search.emit(value);
  }
}
