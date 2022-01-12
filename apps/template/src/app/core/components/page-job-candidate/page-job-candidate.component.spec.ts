import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobCandidateComponent } from './page-job-candidate.component';

describe('PageJobCandidateComponent', () => {
  let component: PageJobCandidateComponent;
  let fixture: ComponentFixture<PageJobCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJobCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJobCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
