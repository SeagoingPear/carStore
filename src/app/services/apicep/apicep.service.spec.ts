import { TestBed } from '@angular/core/testing';

import { ApicepService } from './apicep.service';

describe('ApicepService', () => {
  let service: ApicepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
