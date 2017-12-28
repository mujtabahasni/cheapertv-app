import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-services',
  template: `
<section>
<h2>Your Services</h2>
<p>
    Please select all services that you are currently subscribing to.
</p>
<fieldset>
  <legend>Television Services</legend>
  <form [connect]="['profiles', 'form']">
    <div *ngFor="let service of services.tv">
      <label>
      <input name="tv" type="radio" [value]="service.id" ngControl ngModel>{{ service.name }}
      </label>
    </div>
  </form>
</fieldset>
<fieldset>
  <legend>Streaming Services</legend>
  <form [connect]="['profiles', 'form', 'streaming']">
    <div *ngFor="let service of services.streaming">
      <label>
        <input name="{{service.id}}" type="checkbox" ngModel ngControl>{{ service.name }}
      </label>
    </div>
  </form>
</fieldset>
</section>
 `
})
export class ProfileFormServicesComponent {
  @Input() services = {tv: [], streaming: []};
}
