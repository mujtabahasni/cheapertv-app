import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { TvDbService, TvDbResponseItem, TvDbShowItem } from './tvdb.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { TvShowData } from '../tvshows/store/tvshows.models';
import { searchShows } from '../tvshows/index';
import { read } from 'fs';
import { dissoc } from 'ramda';

describe('TVDB API Service', () => {

  let tvdb: TvDbService;
  let http: HttpClient;
  let mock: HttpTestingController;
  let req: TestRequest;
  const queryTitle = 'rick';
  let response;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TvDbService ],
    });

    // TestBed provides its own injector, instead of inject()
    http = TestBed.get(HttpClient);
    mock = TestBed.get(HttpTestingController);
    tvdb = new TvDbService(http);
   }
  );

  afterEach(() => {
    // For some reason requests become cancelled before this callback.
  });

  function doResponse(res = response) {
      req.flush(res);
      mock.verify();
  }

  describe('Search', () => {
    beforeEach(() => {
    response  =  [{
      'show': {
        'id': '216',
        'name': 'Rick & Morty',
        'summary': 'The Rick and Morty Show.',
        'image': {
          'medium': 'http://rangle.io/images/poster.jpg'
        }
      }
    }] as TvDbResponseItem[];
    });
    const getSearchUrl = (title: string) =>
      `http://api.tvmaze.com/search/shows?q=${title}`;

    it('should connect to the TvDB API using the GET protocol', () => {
      tvdb.search(queryTitle).subscribe();
      req = mock.expectOne(getSearchUrl(queryTitle));
      expect(req.request.method).toEqual('GET');

      doResponse();
    });

    it('should return the full title for shows matching the query', () => {
      tvdb.search(queryTitle)
        .subscribe((data: TvShowData[]) => {
          expect(data[0].title).toEqual(response[0].show.name);
        });

      req = mock.expectOne(getSearchUrl(queryTitle));

      doResponse();
    });

    it('should return the a summary for shows matching the query', () => {
      tvdb.search(queryTitle)
        .subscribe((data: TvShowData[]) => {
          expect(data[0].summary).toEqual(response[0].show.summary);
        });

      req = mock.expectOne(getSearchUrl(queryTitle));

      doResponse();
    });

    it('should return the "medium" sized image for shows matching the query', () => {
      // Remove image data element from response json.
      response = dissoc('image', response);

      tvdb.search(queryTitle)
        .subscribe((data: TvShowData[]) => {
          expect(data[0].posterUrl).toEqual(response[0].show.image.medium);
        });

      req = mock.expectOne(getSearchUrl(queryTitle));

      doResponse(response);
    });

    it('should return zero results if there are no shows matching the search query', () => {
      response = [] as TvDbResponseItem[];
      tvdb.search(queryTitle)
        .subscribe((data: TvShowData[]) => {
          expect(data).toEqual([] as TvShowData[]);
        });

      req = mock.expectOne(getSearchUrl(queryTitle));

      doResponse(response);
    });

    it('should return zero results if an error occured', () => {
      response = [] as TvDbResponseItem[];
      tvdb.search(queryTitle)
        .subscribe((data: TvShowData[]) => {
          expect(data).toEqual([] as TvShowData[]);
        },
        (error) => {
          expect(error).toBeDefined();
        }
        );

      req = mock.expectOne(getSearchUrl(queryTitle));
      req.error(new ErrorEvent('unknown error'));
      mock.verify();
    });

    it('should always return a posterURL in show details, even if API provided none.', () => {
      tvdb.search(queryTitle)
        .subscribe((data: TvShowData[]) => {
          expect(data[0].posterUrl).toBeDefined();
        });
      req = mock.expectOne(getSearchUrl(queryTitle));
      doResponse();
    });
  });


  describe('Details', () => {

    beforeEach(() => {
      response = {
        'id': '216',
        'name': 'Rick & Morty',
        'summary': 'The Rick and Morty Show.',
        'image': {
          'medium': 'http://rangle.io/images/poster.jpg'
        }
      } as TvDbShowItem;
    });

    const showId = '216';

    const getDetailsUrl = (id: string) =>
      `http://api.tvmaze.com/shows/${id}`;

    it('should connect to the TvDB API using the GET protocol', () => {
      tvdb.details(showId).subscribe();

      req = mock.expectOne(getDetailsUrl(showId));
      expect(req.request.method).toEqual('GET');

      doResponse();
    });

    it('should return the full title for show matching the id', () => {
      tvdb.details(showId)
        .subscribe((data: TvShowData) => {
          expect(data.title).toEqual(response.name);
        });

      req = mock.expectOne(getDetailsUrl(showId));

      doResponse();
    });

    it('should return the a summary for show matching the id', () => {
      tvdb.details(showId)
        .subscribe((data: TvShowData) => {
          expect(data.summary).toEqual(response.summary);
        });

      req = mock.expectOne(getDetailsUrl(showId));

      doResponse();
    });

    it('should return the "medium" sized image for shows matching the query', () => {

      tvdb.details(showId)
        .subscribe((data: TvShowData) => {
          expect(data.posterUrl).toEqual(response.image.medium);
        });

      req = mock.expectOne(getDetailsUrl(showId));

      doResponse(response);
    });

    it('should always return a posterURL in show details, even if API provided none.', () => {
      // Remove image data element from response json.
      response = dissoc('image', response);

      tvdb.details(showId)
        .subscribe((data: TvShowData) => {
          expect(data.posterUrl).toBeDefined();
        });
      req = mock.expectOne(getDetailsUrl(showId));
      doResponse();
    });

    it('should return zero results if an error occured', () => {
      response = {} as TvDbResponseItem;

      tvdb.details(showId)
        .subscribe((data: TvShowData) => {
        },
        (error) => {
          expect(error).toBeDefined();
        }
        );

      req = mock.expectOne(getDetailsUrl(showId));
      req.error(new ErrorEvent('unknown error'));
      mock.verify();
    });

  });
});
