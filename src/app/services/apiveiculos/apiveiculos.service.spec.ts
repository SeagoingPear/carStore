import { TestBed } from '@angular/core/testing';

import { ApiveiculosService } from './apiveiculos.service';

describe('ApiveiculosService', () => {
  let service: ApiveiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiveiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
