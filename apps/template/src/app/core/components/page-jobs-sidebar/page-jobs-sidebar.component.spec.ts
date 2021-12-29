import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobsSidebarComponent } from './page-jobs-sidebar.component';

describe('PageJobsSidebarComponent', () => {
  let component: PageJobsSidebarComponent;
  let fixture: ComponentFixture<PageJobsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJobsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJobsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
