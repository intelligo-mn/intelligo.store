import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features02Component } from './features-02.component';

describe('Features02Component', () => {
  let component: Features02Component;
  let fixture: ComponentFixture<Features02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});