import { TestBed, inject } from '@angular/core/testing';

import { CommonFuncService } from './common-func.service';

describe('CommonFuncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonFuncService]
    });
  });

  it('should be created', inject([CommonFuncService], (service: CommonFuncService) => {
    expect(service).toBeTruthy();
  }));
});
