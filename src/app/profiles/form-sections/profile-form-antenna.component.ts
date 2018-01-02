import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-antenna',
  template: `

<form [connect]="['profiles', 'form']">
  <section *ngIf="home === 'house'">
  <fieldset>
    <legend>Do you have an HDTV antenna?</legend>
    <div>
      <label><input type="radio" name="antenna" value="1" ngControl ngModel>Yes, its installed above my TV.</label>
    </div>
    <div>
      <label><input type="radio" name="antenna" value="2" ngControl ngModel>Yes, its installed in my attic.</label>
    </div>
    <div>
      <label><input type="radio" name="antenna" value="3" ngControl ngModel>Yes, its installed on my roof.</label>
    </div>
    <div>
      <label><input type="radio" name="antenna" value="0" ngControl ngModel>No, I do not have an HDTV antenna.</label>
    </div>
    </fieldset>
  </section>
  <section *ngIf="home === 'apartment'">
    <fieldset>
      <legend>Do you have an HDTV anntena installed above your HDTV?</legend>
      <div>
        <label><input type="radio" name="antenna" value="1" ngControl ngModel>Yes, I have an HDTV installed above my TV.</label>
      </div>
      <div>
        <label><input type="radio" name="antenna" value="0" ngControl ngModel>No, I do not have an HDTV installed above my TV</label>
      </div>
    </fieldset>
    <fieldset>
      <legend>How many floors up is your appartment?</legend>
      <div>
        <input type="number" name="apartmentFloor" min="1" ngControl ngModel>
      </div>
    </fieldset>
  </section>
</form>
  `
})
export class ProfileFormAntennaComponent {
  @Input() home: string;
}
