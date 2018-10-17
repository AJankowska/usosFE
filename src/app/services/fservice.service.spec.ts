import { TestBed, inject } from '@angular/core/testing';

import { FserviceService } from './fservice.service';

describe('FserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FserviceService]
    });
  });

  it('should be created', inject([FserviceService], (service: FserviceService) => {
    expect(service).toBeTruthy();
  }));
});
