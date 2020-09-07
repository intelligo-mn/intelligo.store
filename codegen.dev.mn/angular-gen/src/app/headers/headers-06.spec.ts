import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers06Component } from './headers-06.component';

describe('Headers06Component', () => {
  let component: Headers06Component;
  let fixture: ComponentFixture<Headers06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});