import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInsuranceComponent } from './index-insurance.component';

describe('IndexInsuranceComponent', () => {
  let component: IndexInsuranceComponent;
  let fixture: ComponentFixture<IndexInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
