import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvDbService } from './tvdb.service';

describe('TVDB API Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TvDbService ],
    });
  });

  // TBD,
  it('should pass for no reason', () => {
    expect(true).toBeTruthy();
  });
});
