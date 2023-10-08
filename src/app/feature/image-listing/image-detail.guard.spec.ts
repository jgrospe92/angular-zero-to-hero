import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { imageDetailGuard } from './image-detail.guard';

describe('imageDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => imageDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
