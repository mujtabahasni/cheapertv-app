import * as R from 'ramda';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TvShowData } from '../tvshows/store/tvshows.models';

const API_BASE_URL = 'http://api.tvmaze.com';

export interface TvDbShowItem {
  id: string;
  name: string;
  summary: string;
  image?: {
    medium: string;
  };
}

export interface TvDbResponseItem {
  show: TvDbShowItem;
}

function getPlaceholderUrl(title: string) {
  return `https://via.placeholder.com/210x295?text=${encodeURI(title)}`;
}

const posterUrl = (item: TvDbShowItem): string =>
  R.propOr(getPlaceholderUrl(item.name), 'medium', item.image);

const itemToShowData = (item: TvDbShowItem): TvShowData => ({
  id: item.id,
  title: item.name,
  summary: item.summary,
  posterUrl: posterUrl(item)
});

const responseToItems = R.compose(
  R.map(itemToShowData),
  R.map((item: TvDbResponseItem) => item.show),
);

@Injectable()
export class TvDbService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<TvShowData[]> {
    const q = encodeURI(query);
    return this.http
      .get<TvDbResponseItem[]>(`${API_BASE_URL}/search/shows?q=${q}`)
      .map(responseToItems);
  }

  details(id: string): Observable<TvShowData> {
    return this.http
      .get<TvDbShowItem>(`${API_BASE_URL}/shows/${id}`)
      .map(itemToShowData);
  }
}
