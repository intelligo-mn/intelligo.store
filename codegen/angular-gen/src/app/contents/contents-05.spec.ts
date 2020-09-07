import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents05Component } from './contents-05.component';

describe('Contents05Component', () => {
  let component: Contents05Component;
  let fixture: ComponentFixture<Contents05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});