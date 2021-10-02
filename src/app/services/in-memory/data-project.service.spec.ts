import { TestBed } from '@angular/core/testing';

import { DataProjectService } from '../data-project.service';

describe('DataProjectService', () => {
  let service: DataProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
