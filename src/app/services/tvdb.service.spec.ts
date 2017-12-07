import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvDbService, TvDbResponseItem } from './tvdb.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { TvShowData } from '../tvshows/store/tvshows.models';

describe('TVDB API Service', () => {

  let tvdb: TvDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TvDbService ],
    });
  });

  it('should query the TvDB API for show titles using GET protocol and return matching show data',
    inject([HttpClient, HttpTestingController], (http: HttpClient, mock: HttpTestingController) => {
      const query = 'rick';
      const response: TvDbResponseItem[] = [{
        show: {
          name: 'Rick & Morty',
          summary: 'The Rick and Morty Show.'
        }
      }];

      tvdb = new TvDbService(http);

      tvdb.search(query)
        .subscribe((data: TvShowData[]) =>  {
          expect(data[0].title).toEqual(response[0].show.name);
          expect(data[0].summary).toEqual(response[0].show.summary);
        });

      const req = mock.expectOne('http://api.tvmaze.com/search/shows?q=' + query);
      expect(req.request.method).toEqual('GET');

      req.flush(response);

      mock.verify();
    }));
});
