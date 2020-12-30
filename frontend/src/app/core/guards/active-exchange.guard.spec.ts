import { TestBed } from '@angular/core/testing';

import { ActiveExchangeGuard } from './active-exchange.guard';

describe('ActiveExchangeGuard', () => {
  let guard: ActiveExchangeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveExchangeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
