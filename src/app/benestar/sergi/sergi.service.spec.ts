import { TestBed, inject } from '@angular/core/testing';

import { SergiService } from './sergi.service';

describe('SergiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SergiService]
    });
  });

  it('should be created', inject([SergiService], (service: SergiService) => {
    expect(service).toBeTruthy();
  }));
});
