import { TestBed, inject } from '@angular/core/testing';

import { PersonesService } from './persones.service';

describe('JaumeMGService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonesService]
    });
  });

  it('should be created', inject([PersonesService], (service: PersonesService) => {
    expect(service).toBeTruthy();
  }));
});
