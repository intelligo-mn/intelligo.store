import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents18Component } from './contents-18.component';

describe('Contents18Component', () => {
  let component: Contents18Component;
  let fixture: ComponentFixture<Contents18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});