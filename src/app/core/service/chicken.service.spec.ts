import { TestBed } from '@angular/core/testing';

import { ChickenService } from './chicken.service';

describe('ChickenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChickenService = TestBed.get(ChickenService);
    expect(service).toBeTruthy();
  });
});
