import { TestBed } from '@angular/core/testing';

import { UrlShortenServiceService } from './url-shorten-service.service';

describe('UrlShortenServiceService', () => {
  let service: UrlShortenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShortenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
