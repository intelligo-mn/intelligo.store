import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents30Component } from './contents-30.component';

describe('Contents30Component', () => {
  let component: Contents30Component;
  let fixture: ComponentFixture<Contents30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});