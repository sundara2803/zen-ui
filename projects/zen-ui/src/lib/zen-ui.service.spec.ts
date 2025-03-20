import { TestBed } from '@angular/core/testing';

import { ZenUiService } from './zen-ui.service';

describe('ZenUiService', () => {
  let service: ZenUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZenUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
