import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents14Component } from './contents-14.component';

describe('Contents14Component', () => {
  let component: Contents14Component;
  let fixture: ComponentFixture<Contents14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});