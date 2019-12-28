import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features01Component } from './features-01.component';

describe('Features01Component', () => {
  let component: Features01Component;
  let fixture: ComponentFixture<Features01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});