import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents04Component } from './contents-04.component';

describe('Contents04Component', () => {
  let component: Contents04Component;
  let fixture: ComponentFixture<Contents04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});