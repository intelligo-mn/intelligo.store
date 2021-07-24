import { TestBed } from '@angular/core/testing';

import { ArticleApiService } from './article-api.service';

describe('ArticleApiService', () => {
  let service: ArticleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
