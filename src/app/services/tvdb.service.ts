import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TvShowData } from '../tvshows/store/tvshows.models';

const API_BASE_URL = 'http://api.tvmaze.com';

interface TvDbResponseItem {
  show: {
    name: string;
  };
}

const itemToShowData = (item: TvDbResponseItem): TvShowData => ({
  title: item.show.name,
});

const responseToItems = (items: TvDbResponseItem[]): TvShowData[] => items.map(itemToShowData);

@Injectable()
export class TvDbService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<TvShowData[]> {
    const q = encodeURI(query);
    return this.http
      .get<TvDbResponseItem[]>(`${API_BASE_URL}/search/shows?q=${q}`)
      .map(responseToItems);
  }
}
