import { TestBed } from '@angular/core/testing';

import { NgxNavkitService } from './ngx-navkit.service';

describe('NgxNavkitService', () => {
  let service: NgxNavkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNavkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
