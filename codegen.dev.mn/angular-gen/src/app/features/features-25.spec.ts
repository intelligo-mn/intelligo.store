import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features25Component } from './features-25.component';

describe('Features25Component', () => {
  let component: Features25Component;
  let fixture: ComponentFixture<Features25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});