import { TestBed } from '@angular/core/testing';

import { HNAPIService } from './hn-api.service';

describe('HNAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HNAPIService = TestBed.get(HNAPIService);
    expect(service).toBeTruthy();
  });
});
