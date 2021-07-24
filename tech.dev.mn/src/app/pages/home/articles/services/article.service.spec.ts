import { TestBed } from '@angular/core/testing';

import { ArticleStore } from './article.store';

describe('ArticleStore', () => {
  let service: ArticleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
