import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPaymentsComponent } from './index-payments.component';

describe('IndexPaymentsComponent', () => {
  let component: IndexPaymentsComponent;
  let fixture: ComponentFixture<IndexPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
