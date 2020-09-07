import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features31Component } from './features-31.component';

describe('Features31Component', () => {
  let component: Features31Component;
  let fixture: ComponentFixture<Features31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});