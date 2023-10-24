import { TestBed } from '@angular/core/testing';

import { ConsumptionServiceService } from './consumption-service.service';

describe('ConsumptionServiceService', () => {
  let service: ConsumptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
