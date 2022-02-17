import { TestBed } from '@angular/core/testing';

import { DocumentCenterService } from './document-center.service';

describe('DocumentCenterService', () => {
  let service: DocumentCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
