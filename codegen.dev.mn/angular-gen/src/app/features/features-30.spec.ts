import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features30Component } from './features-30.component';

describe('Features30Component', () => {
  let component: Features30Component;
  let fixture: ComponentFixture<Features30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});