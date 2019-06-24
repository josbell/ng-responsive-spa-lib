import { TestBed } from '@angular/core/testing';

import { NgResponsiveSpaLibService } from './ng-responsive-spa-lib.service';

describe('NgResponsiveSpaLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgResponsiveSpaLibService = TestBed.get(NgResponsiveSpaLibService);
    expect(service).toBeTruthy();
  });
});
