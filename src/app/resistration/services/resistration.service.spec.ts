import { TestBed } from '@angular/core/testing';

import { ResistrationService } from './resistration.service';

describe('ResistrationService', () => {
  let service: ResistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
