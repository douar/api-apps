import { TestBed } from '@angular/core/testing';

import { BoredHttpService } from './bored-http.service';

describe('BoredHttpService', () => {
  let service: BoredHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
