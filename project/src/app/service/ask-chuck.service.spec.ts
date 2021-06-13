import { TestBed } from '@angular/core/testing';

import { AskChuckService } from './ask-chuck.service';

describe('AskChuckService', () => {
  let service: AskChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskChuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
