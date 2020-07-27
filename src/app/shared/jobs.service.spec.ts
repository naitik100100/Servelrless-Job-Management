import { JobService } from './job.service';
import { TestBed } from '@angular/core/testing';

describe('JobsService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
