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
  <fieldset>
    <legend>Location</legend>
        <div>
          <label for="city">Municipalitiy</label>
          <select name="city" ngControl ngModel>
            <option selected disabled>Please select</option>
            <option *ngFor="let city of cities">{{ city }}</option>
          </select>
        </div>
        <div>
          <label for="address" >Address:</label>
          <input name="address" type="text" ngControl ngModel>
        </div>
        <div>
          <label for="postal">Postal Code:</label>
          <input name="postal" type="text" maxlength="6" ngControl ngModel>
        </div>
  </fieldset>
  <fieldset>
    <legend>Do you live in a house or an apartment building?:</legend>
    <section>
    <div>
      <label><input type="radio" ngControl ngModel name="home" value="house">I live in a house.</label>
    </div>
    <div>
      <label><input type="radio" ngControl ngModel name="home" value="apartment">I live in an apartment building.</label>
    </div>
    </section>
  </fieldset>
  </form>
 </section>
`
})
export class ProfileFormHomeComponent {
  @Input() cities: string[];
}
