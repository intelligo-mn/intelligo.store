import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobDetailComponent } from './page-job-detail.component';

describe('PageJobDetailComponent', () => {
  let component: PageJobDetailComponent;
  let fixture: ComponentFixture<PageJobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJobDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
