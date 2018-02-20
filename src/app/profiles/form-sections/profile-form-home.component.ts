import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-home',
  template: `
<section>
  <form [connect]="['profiles', 'form']">
  <h2>Your Home</h2>
  <p>
    Please provide your location and details about your household. This will help
    us determine the availablility of Free-to-Air HD broadasters to you.
  </p>
 <mat-card class="mw6 center ma2">
    <mat-card-title>Location</mat-card-title>
     <div>
        <mat-form-field>
          <mat-select placeholder="Municipality" name="city" ngControl ngModel>
            <mat-option selected disabled>Please select</mat-option>
            <mat-option *ngFor="let city of cities">{{ city }}</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field>
          <input matInput placeholder="Address" name="address" type="text" ngControl ngModel>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field>
          <input placeholder="Postal Code" matInput name="postal" type="text" maxlength="6" ngControl ngModel>
        </mat-form-field>
      </div>
  </mat-card>
 <mat-card class="mw6 center ma2">
    <mat-card-title>Do you live in a house or an apartment building?:</mat-card-title>
    <section>
    <mat-radio-group name="home" ngControl ngModel>
      <div>
        <mat-radio-button value="house">I live in a house.</mat-radio-button>
      </div>
      <div>
        <mat-radio-button value="apartment">I live in an apartment building.</mat-radio-button>
      </div>
    </mat-radio-group>
    </section>
  </mat-card>
  </form>
 </section>
`
})
export class ProfileFormHomeComponent {
  @Input() cities: string[];
}
