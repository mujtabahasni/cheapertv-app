import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TvShowData } from '../tvshows/store/tvshows.models';

const API_BASE_URL = 'http://api.tvmaze.com';

@Injectable()
export class TvDbService {

  constructor(private http: Http) { }

  search(query: string): Promise<TvShowData[]> {
    const q = encodeURI(query);
    return this.http
      .get(`${API_BASE_URL}/search/shows?q=${q}`)
      .map((response) => response.json())
      .map((shows) => shows.map((item) => ({
        title: item.show.name,
      })))
      .toPromise();
  }
}
