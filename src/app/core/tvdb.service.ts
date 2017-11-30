import { Injectable } from '@angular/core';

const TVSHOWS = [
  {name: "WalkingDead"},
  {name: "Wheel of Forune"},
  {name: "The Walking Dead"},
  {name: "Rick & Morty"},
]

@Injectable()
export class TvDbService {

  search(query: string) {
    return [ ...TVSHOWS.filter((show) => show.name.includes(query)) ];
  }
}