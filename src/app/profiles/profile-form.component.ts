import { Component, Input } from '@angular/core';
import { constants } from './profile-constants';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.html',
})
export class ProfileFormComponent {
  @Input() services: {
    tv: object[],
    streaming: object[]
  };
  @Input() cities: string[];
  @Input() home: string;
  @Input()
    set membersNum(num: Number) {
      this.membersRange = Array(num).fill(num).map((x, i) => i);
    }
    get membersNum(): Number {
      return this.membersRange.length;
    }
  membersRange = [];
}
