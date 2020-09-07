import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents17Component } from './contents-17.component';

describe('Contents17Component', () => {
  let component: Contents17Component;
  let fixture: ComponentFixture<Contents17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});