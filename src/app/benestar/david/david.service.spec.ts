import { TestBed, inject } from '@angular/core/testing';

import { DavidService } from './david.service';

describe('DavidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DavidService]
    });
  });

  it('should be created', inject([DavidService], (service: DavidService) => {
    expect(service).toBeTruthy();
  }));
});
