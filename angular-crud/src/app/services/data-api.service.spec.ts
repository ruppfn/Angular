import { TestBed } from '@angular/core/testing';

import { ApiService } from './data-api.service';

describe('DataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
