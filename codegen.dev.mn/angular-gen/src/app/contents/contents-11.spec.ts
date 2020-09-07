import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents11Component } from './contents-11.component';

describe('Contents11Component', () => {
  let component: Contents11Component;
  let fixture: ComponentFixture<Contents11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});