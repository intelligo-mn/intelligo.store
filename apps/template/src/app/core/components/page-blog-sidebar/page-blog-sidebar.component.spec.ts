import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogSidebarComponent } from './page-blog-sidebar.component';

describe('PageBlogSidebarComponent', () => {
  let component: PageBlogSidebarComponent;
  let fixture: ComponentFixture<PageBlogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
