import { TestBed } from '@angular/core/testing';

import { NgTailwindDatatableService } from './ng-tailwind-datatable.service';

describe('NgTailwindDatatableService', () => {
  let service: NgTailwindDatatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTailwindDatatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
