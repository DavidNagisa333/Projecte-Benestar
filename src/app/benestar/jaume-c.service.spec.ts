import { TestBed, inject } from '@angular/core/testing';

import { JaumeCService } from './jaume-c.service';

describe('JaumeCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JaumeCService]
    });
  });

  it('should be created', inject([JaumeCService], (service: JaumeCService) => {
    expect(service).toBeTruthy();
  }));
});
