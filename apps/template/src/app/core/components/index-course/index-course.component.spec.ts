import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCourseComponent } from './index-course.component';

describe('IndexCourseComponent', () => {
  let component: IndexCourseComponent;
  let fixture: ComponentFixture<IndexCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
