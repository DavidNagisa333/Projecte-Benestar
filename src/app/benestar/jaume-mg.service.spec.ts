import { TestBed, inject } from '@angular/core/testing';

import { JaumeMGService } from './jaume-mg.service';

describe('JaumeMGService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JaumeMGService]
    });
  });

  it('should be created', inject([JaumeMGService], (service: JaumeMGService) => {
    expect(service).toBeTruthy();
  }));
});
