import { TestBed } from '@angular/core/testing';

import { BoredServiceService } from './bored-service.service';

describe('BoredServiceService', () => {
  let service: BoredServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
