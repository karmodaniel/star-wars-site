import { TestBed } from '@angular/core/testing';

import { ApiStarWarsService } from './api-star-wars.service';

describe('ApiStarWarsService', () => {
  let service: ApiStarWarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStarWarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
