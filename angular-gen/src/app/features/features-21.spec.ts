import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features21Component } from './features-21.component';

describe('Features21Component', () => {
  let component: Features21Component;
  let fixture: ComponentFixture<Features21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});