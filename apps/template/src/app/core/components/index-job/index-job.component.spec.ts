import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexJobComponent } from './index-job.component';

describe('IndexJobComponent', () => {
  let component: IndexJobComponent;
  let fixture: ComponentFixture<IndexJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
