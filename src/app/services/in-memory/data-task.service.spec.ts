import { TestBed } from '@angular/core/testing';

import { DataTaskService } from './data-task.service';

describe('DataTaskService', () => {
  let service: DataTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
