import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailTwoComponent } from './page-blog-detail-two.component';

describe('PageBlogDetailTwoComponent', () => {
  let component: PageBlogDetailTwoComponent;
  let fixture: ComponentFixture<PageBlogDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogDetailTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
