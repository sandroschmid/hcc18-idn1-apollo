import { TestBed } from '@angular/core/testing';

import { HenHouseService } from './hen-house.service';

describe('HenHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HenHouseService = TestBed.get(HenHouseService);
    expect(service).toBeTruthy();
  });
});
