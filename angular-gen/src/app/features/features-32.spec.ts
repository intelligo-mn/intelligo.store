import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features32Component } from './features-32.component';

describe('Features32Component', () => {
  let component: Features32Component;
  let fixture: ComponentFixture<Features32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});