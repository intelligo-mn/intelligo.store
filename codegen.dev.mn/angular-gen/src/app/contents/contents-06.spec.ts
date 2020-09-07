import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents06Component } from './contents-06.component';

describe('Contents06Component', () => {
  let component: Contents06Component;
  let fixture: ComponentFixture<Contents06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});