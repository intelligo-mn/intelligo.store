import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTaskManagementComponent } from './index-task-management.component';

describe('IndexTaskManagementComponent', () => {
  let component: IndexTaskManagementComponent;
  let fixture: ComponentFixture<IndexTaskManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTaskManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
