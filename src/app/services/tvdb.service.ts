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
      .do((json) => console.log(json))
      .map((shows) => shows.map((item) => ({
        title: item.show.name,
        summary: item.show.summary,
        posterUrl: item.show.image ? item.show.image.medium : getPlaceholderUrl(item.show.name)
      })))
      .toPromise();
  }
}

function getPlaceholderUrl(title: string) {
  return `https://via.placeholder.com/210x295?text=${encodeURI(title)}`;
}
