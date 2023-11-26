import { TestBed } from '@angular/core/testing';

import { TransitionSmoothService } from './transition-smooth.service';

describe('TransitionSmoothService', () => {
  let service: TransitionSmoothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitionSmoothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
