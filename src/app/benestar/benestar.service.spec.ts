import { TestBed, inject } from '@angular/core/testing';

import { BenestarService } from './benestar.service';

describe('BenestarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BenestarService]
    });
  });

  it('should be created', inject([BenestarService], (service: BenestarService) => {
    expect(service).toBeTruthy();
  }));
});
