import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvShowData } from '../tvshows/store/tvshows.models';

const TVSHOWS: TvShowData[] = [
  { title: 'WalkingDead' },
  { title: 'Wheel of Forune' },
  { title: 'The Walking Dead' },
  { title: 'Rick & Morty' },
];

@Injectable()
export class TvDbService {
  search(query: string): Promise<TvShowData[]> {
    const regexp = new RegExp(query, 'i');
    console.log(regexp);
    const results = [...TVSHOWS].filter((show) => regexp.test(show.title));
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(results), 1000); // Mock 3sec API request
    });
  }
}
