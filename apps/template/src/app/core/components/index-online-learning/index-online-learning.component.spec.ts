import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOnlineLearningComponent } from './index-online-learning.component';

describe('IndexOnlineLearningComponent', () => {
  let component: IndexOnlineLearningComponent;
  let fixture: ComponentFixture<IndexOnlineLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexOnlineLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOnlineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
