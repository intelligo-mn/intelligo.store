import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers16Component } from './headers-16.component';

describe('Headers16Component', () => {
  let component: Headers16Component;
  let fixture: ComponentFixture<Headers16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});