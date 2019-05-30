import { TestBed } from '@angular/core/testing';

import { EdithotelGuardService } from './edithotel-guard.service';

describe('EdithotelGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdithotelGuardService = TestBed.get(EdithotelGuardService);
    expect(service).toBeTruthy();
  });
});
