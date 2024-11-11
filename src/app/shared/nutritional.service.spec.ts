import { TestBed } from '@angular/core/testing';

import { NutritionalService } from './nutritional.service';

describe('NutritionalService', () => {
  let service: NutritionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
