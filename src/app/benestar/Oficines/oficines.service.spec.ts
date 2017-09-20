import { TestBed, inject } from '@angular/core/testing';

import { OficinesService } from './oficines.service';

describe('OficinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OficinesService]
    });
  });

  it('should be created', inject([OficinesService], (service: OficinesService) => {
    expect(service).toBeTruthy();
  }));
});
