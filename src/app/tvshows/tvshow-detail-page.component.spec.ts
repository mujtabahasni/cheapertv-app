import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgRedux } from '@angular-redux/store';
import { MockNgRedux } from '@angular-redux/store/testing';

import { RootState, initialRootState } from '../store';
import { TvShowDetailPageComponent } from './tvshow-detail-page.component';
import { TvDbService, OtaService } from '../core/services';
import { TvShowData } from './store/tvshows.models';

import { MaterialUiModule } from '../material-ui/material-ui.module';


describe('Tv Show Details Page Component', () => {

  let comp: TvShowDetailPageComponent;
  let fixture: ComponentFixture<TvShowDetailPageComponent>;
  const data: TvShowData = {
    id: '101',
    title: 'notitle',
    summary: 'nosummary',
    posterUrl: 'about://blank',
   };
  let selectorStub;
  // Service Stubs
  const store = {
    dispatch: ( action ) => { }
  };

  const route = {
    snapshot: {
      paramMap: {
        get: (param) => data.id
      }
    }
  };

  const tvdb = {
    details: (id) => ({
      toPromise: () => ({
        then: (cb) => cb(data)
      })
    })
  };

  // Service is fake anyway...
  const ota = new OtaService();

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        MaterialUiModule,
      ],

      providers: [
        {provide: NgRedux, useValue: MockNgRedux.getInstance},
        {provide: ActivatedRoute, useValue: route},
        {provide: TvDbService, useValue: tvdb},
        {provide: OtaService, useValue: ota},
      ],

      declarations: [ TvShowDetailPageComponent ]
    });

    MockNgRedux.reset();

    fixture = TestBed.createComponent(TvShowDetailPageComponent);
    comp = fixture.componentInstance;

    selectorStub = MockNgRedux.getSelectorStub(['profiles', 'selectedShows']);

    comp.ngOnInit();
    fixture.detectChanges();
  });

  it('should display the title from the supplied show info', () => {
    selectorStub.next([]);
    selectorStub.complete();
    const de = fixture.debugElement.query(By.css('mat-card-title'));
    const el = de.nativeElement;
    expect(el.textContent).toContain(data.title);
  });

  it('should display the summary content from the supplied show info', () => {
    selectorStub.next([]);
    selectorStub.complete();
    const de = fixture.debugElement.query(By.css('mat-card-content'));
    const el = de.nativeElement;
    expect(el.textContent).toContain(data.summary);
  });

  it('should display the poster image from the supplied show info', () => {
    selectorStub.next([]);
    selectorStub.complete();
    const de = fixture.debugElement.query(By.css('[mat-card-image]'));
    const el = de.nativeElement;
    expect(el.src).toContain(data.posterUrl);
  });

  it('should display the Add button if the supplied show is not selected', () => {
    selectorStub.next([]);
    selectorStub.complete();
    const de = fixture.debugElement.query(By.css('[color="primary"]'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('Add');
  });

  /* TODO: Fix this test case!
  it('should display the Delete button if the supplied show is selected', () => {
    selectorStub.next([Number(data.id)]);
    selectorStub.complete();
    const de = fixture.debugElement.query(By.css('[color="warn"]'));
    const el = de.nativeElement;
    console.log({el});
    expect(el.textContent).toContain('Delete');
  })
  */
});
