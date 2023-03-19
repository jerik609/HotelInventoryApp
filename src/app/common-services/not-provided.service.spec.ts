import { TestBed } from '@angular/core/testing';

import { NotProvidedService } from './not-provided.service';

describe('NotProvidedService', () => {
  let service: NotProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
