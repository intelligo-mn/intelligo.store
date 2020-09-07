import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents13Component } from './contents-13.component';

describe('Contents13Component', () => {
  let component: Contents13Component;
  let fixture: ComponentFixture<Contents13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});