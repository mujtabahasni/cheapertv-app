import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-members',
  template: `
<section>
 <mat-card class="mw6 center ma2">
    <mat-card-title>Household Members</mat-card-title>
    <form [connect]="['profiles', 'form']">
      <mat-select placeholder="Additional household members:" name="membersNum" ngControl ngModel>
        <mat-option selected disabled value="0">0</mat-option>
        <mat-option *ngFor="let n of [1,2,3,4,5,6,7,8,9,10]" [value]="n">{{n}}</mat-option>
      </mat-select>
      <div *ngIf="membersNum > '0'">
      <p>Enter nicknames of each household member, and their level of technical abilty</p>
        <mat-card *ngFor="let n of membersRange" class="ma2">
         <mat-card-title-group>
          <mat-icon>face</mat-icon>
         </mat-card-title-group>
          <div>
            <mat-form-field>
              <input matInput type="text" name="member{{n}}-nickname" placeholder="Nickname:" ngControl ngModel>
            </mat-form-field>
          </div>
          <div>
          <mat-select placeholder="Technical Ability" name="member{{n}}-abilty" ngControl ngModel>
            <mat-option value="potato">Knows only how to switch channels on live TV.</mat-option>
            <mat-option value="basic">Knows how use the PVR function to record live TV.</mat-option>
            <mat-option value="intermediate">Knows how to stream and cast video on a mobile device.</mat-option>
            <mat-option value="advanced">Knows how to connect devices to TV.</mat-option>
            <mat-option value="expert">Knows how to install software on a PC</mat-option>
          </mat-select>
          </div>
        </mat-card>
      </div>
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
