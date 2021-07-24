import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHeaderComponent } from './article-header.component';

describe('ArticleHeaderComponent', () => {
  let component: ArticleHeaderComponent;
  let fixture: ComponentFixture<ArticleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
