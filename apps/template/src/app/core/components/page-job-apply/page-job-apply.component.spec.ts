import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobApplyComponent } from './page-job-apply.component';

describe('PageJobApplyComponent', () => {
  let component: PageJobApplyComponent;
  let fixture: ComponentFixture<PageJobApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJobApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
