import { TestBed } from '@angular/core/testing';

import { DataTaksService } from './data-taks.service';

describe('DataTaksService', () => {
  let service: DataTaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
