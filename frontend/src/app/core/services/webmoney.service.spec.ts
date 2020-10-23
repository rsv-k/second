import { TestBed } from '@angular/core/testing';

import { WebmoneyService } from './webmoney.service';

describe('WebmoneyService', () => {
  let service: WebmoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebmoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
