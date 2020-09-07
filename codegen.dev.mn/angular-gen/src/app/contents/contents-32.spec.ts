import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents32Component } from './contents-32.component';

describe('Contents32Component', () => {
  let component: Contents32Component;
  let fixture: ComponentFixture<Contents32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});