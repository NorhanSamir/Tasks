import { TestBed, inject } from '@angular/core/testing';

import { FlightListService } from './flightList.service';

describe('FlightlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightListService]
    });
  });

  it('should be created', inject([FlightListService], (service: FlightListService) => {
    expect(service).toBeTruthy();
  }));
});
