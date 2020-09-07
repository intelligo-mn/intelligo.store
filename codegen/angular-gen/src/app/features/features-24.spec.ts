import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features24Component } from './features-24.component';

describe('Features24Component', () => {
  let component: Features24Component;
  let fixture: ComponentFixture<Features24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});