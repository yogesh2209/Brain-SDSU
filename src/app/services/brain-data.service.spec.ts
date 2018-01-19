import { TestBed, inject } from '@angular/core/testing';

import { BrainDataService } from './brain-data.service';

describe('BrainDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrainDataService]
    });
  });

  it('should be created', inject([BrainDataService], (service: BrainDataService) => {
    expect(service).toBeTruthy();
  }));
});
