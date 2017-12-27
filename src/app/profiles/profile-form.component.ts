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
    set membersNum(num: string) {
      const size = Number(num);
      this.membersRange = Array(size).fill(0).map((x, i) => i);
    }
    get membersNum(): string {
      return '' + this.membersRange.length;
    }
  membersRange = [];
}
