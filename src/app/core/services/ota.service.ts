import * as R from 'ramda';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


class Station {
  id: string;
  channel: string;
  name: string;
}

export const stations: Station[] = [
  { id: 'CBLT-DT', channel: '20', name: 'CBC'},
  { id: 'CBLFT-DT', channel: '25', name: 'SRC'},
  { id: 'CICA-DT', channel: '19', name: 'TVO'},
  { id: 'CIII-DT', channel: '41', name: 'Global TV'},
  { id: 'CFTO-DT', channel: '9', name: 'CTV'},
  { id: 'CJMT-DT', channel: '40', name: 'OMNI 1'},
  { id: 'CFMT-DT', channel: '47', name: 'OMNI 2'},
  { id: 'CITY-DT', channel: '44', name: 'City TV'},
  { id: 'WNLO-DT', channel: '32', name: 'CW'},
  { id: 'CITS-DT', channel: '36', name: 'Yes TV'},
  { id: 'CHCH-DT', channel: '15', name: 'CHCH'},
];


@Injectable()
export class OtaService {

  findNearest = (lat, lon) => {
    return stations;
  }

  findStationsByShowTitle(title: string): Station[] {
    const stationsFound: Station[] = [];
    let numStationsFound = stringToNum(title, 0, 3);

    while ( numStationsFound-- ) {
      const idx = stringToNum(title, numStationsFound, stations.length);
      stationsFound.push( stations[idx]);
    }

    return stationsFound;
  }
}

function stringToNum(str: string, min: number, max: number): number {
  return min + (str.length % max);
}
