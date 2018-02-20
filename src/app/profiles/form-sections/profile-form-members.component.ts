import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-members',
  template: `
<section>
 <mat-card class="mw6 center ma2">
    <mat-card-title>Household Members</mat-card-title>
    <form [connect]="['profiles', 'form']">
      <mat-select placeholder="Additional household members:" name="membersNum" ngControl ngModel>
        <mat-option selected disabled>0</mat-option>
        <mat-option *ngFor="let n of [1,2,3,4,5,6,7,8,9,10]">{{n}}</mat-option>
      </mat-select>
      <ol *ngIf="membersNum > '0'">
      <p>Enter nicknames of each household member, and their level of technical abilty</p>
        <li *ngFor="let n of membersRange" style="border: 1px solid gray; padding: 10px; margin:5px">
          <label for="member{{n}}-nickname">nickname:</label>
          <input type="text" name="member{{n}}-nickname" placeholder="Enter a name" ngControl ngModel>
          <label for="member{{n}}-abilty">Technical Ability</label>
          <select name="member{{n}}-abilty" ngControl ngModel>
            <option selected disabled>Please select</option>
            <option value="potato">Knows only how to switch channels on live TV.</option>
            <option value="basic">Knows how use the PVR function to record live TV.</option>
            <option value="intermediate">Knows how to stream and cast video on a mobile device.</option>
            <option value="advanced">Knows how to connect devices to TV.</option>
            <option value="expert">Knows how to install software on a PC</option>
          </select>
        </li>
      </ol>
    </form>
    </mat-card>
</section>
`
})
export class ProfileFormMembersComponent {
  @Input()
    set membersNum(num) {
      const size = Number(num);
      this.membersRange = Array(size).fill(0).map((x, i) => i);
    }
    get membersNum() {
      return '' + this.membersRange.length;
    }
  membersRange = [];
}
