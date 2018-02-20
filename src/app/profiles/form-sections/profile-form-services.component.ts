import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-services',
  template: `
<section>
<h2>Your Services</h2>
<p>
    Please select all services that you are currently subscribing to.
</p>
<mat-card class="mw6 center ma2">
  <mat-card-title>Television Services</mat-card-title>
  <form [connect]="['profiles', 'form']">
    <div *ngFor="let service of services.tv">
      <mat-radio-button name="tv" [value]="service.id" ngControl ngModel>{{ service.name }}</mat-radio-button>
    </div>
  </form>
  </mat-card>

  <mat-card class="mw6 center ma2">
  <mat-card-title>Streaming Services</mat-card-title>
  <form [connect]="['profiles', 'form', 'streaming']">
    <div *ngFor="let service of services.streaming">
      <label>
        <mat-checkbox name="{{service.id}}" ngModel ngControl>{{ service.name }}</mat-checkbox>
      </label>
    </div>
  </form>
</mat-card>
</section>
 `
})
export class ProfileFormServicesComponent {
  @Input() services = {tv: [], streaming: []};
}
