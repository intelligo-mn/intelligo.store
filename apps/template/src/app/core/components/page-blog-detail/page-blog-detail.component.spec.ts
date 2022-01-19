import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailComponent } from './page-blog-detail.component';

describe('PageBlogDetailComponent', () => {
  let component: PageBlogDetailComponent;
  let fixture: ComponentFixture<PageBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
