import { TestBed } from '@angular/core/testing';

import { DataSprintService } from './data-sprint.service';

describe('DataSprintService', () => {
  let service: DataSprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
