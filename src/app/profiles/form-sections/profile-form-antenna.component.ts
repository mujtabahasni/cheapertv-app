import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-antenna',
  template: `
<form [connect]="['profiles', 'form']">
  <section *ngIf="home === 'house'">
  <mat-card class="mw6 center ma2">
    <mat-card-title>
      Do you have an HDTV antenna?
    </mat-card-title>
    <mat-radio-group name="antenna" ngControl ngModel>
      <div>
        <mat-radio-button value="1">Yes, its installed above my TV.</mat-radio-button>
      </div>
      <div>
        <mat-radio-button value="2">Yes, its installed in my attic.</mat-radio-button>
      </div>
      <div>
        <mat-radio-button value="3">Yes, its installed on my roof.</mat-radio-button>
      </div>
      <div>
        <mat-radio-button value="0">No, I do not have an HDTV antenna.</mat-radio-button>
      </div>
    </mat-radio-group>
  </mat-card>
  </section>

  <section *ngIf="home === 'apartment'">
    <mat-card class="mw6 center ma2">
      <mat-card-title>Do you have an HDTV anntena installed above your HDTV?</mat-card-title>
      <mat-radio-group name="antenna" ngControl ngModel>
        <div>
          <mat-radio-button value="1">Yes, I have an HDTV installed above my TV.</mat-radio-button>
        </div>
        <div>
          <mat-radio-button value="0">No, I do not have an HDTV installed above my TV</mat-radio-button>
        </div>
      </mat-radio-group>
    </mat-card>
    <mat-card class="mw6 center ma2">
      <mat-card-title>How many floors up is your appartment?</mat-card-title>
      <mat-form-field>
        <input matInput type="number" name="apartmentFloor" min="1" ngControl ngModel>
      </mat-form-field>
    </mat-card>
  </section>
</form>
  `
})
export class ProfileFormAntennaComponent {
  @Input() home: string;
}
