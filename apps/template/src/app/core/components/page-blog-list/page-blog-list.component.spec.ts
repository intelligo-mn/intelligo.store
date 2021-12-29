import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogListComponent } from './page-blog-list.component';

describe('PageBlogListComponent', () => {
  let component: PageBlogListComponent;
  let fixture: ComponentFixture<PageBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
