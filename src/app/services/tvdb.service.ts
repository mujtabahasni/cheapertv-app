import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const TVSHOWS = [
  {title: 'WalkingDead'},
  {title: 'Wheel of Forune'},
  {title: 'The Walking Dead'},
  {title: 'Rick & Morty'},
];

@Injectable()
export class TvDbService {
  search(query: string): Promise<any> {
    const results = [...TVSHOWS];
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(results), 1000); // Mock 3sec API request
    });
  }
}
