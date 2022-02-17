import { TestBed } from '@angular/core/testing';

import { PromissoryDocService } from './promissory-doc.service';

describe('PromissoryDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromissoryDocService = TestBed.get(PromissoryDocService);
    expect(service).toBeTruthy();
  });
});
