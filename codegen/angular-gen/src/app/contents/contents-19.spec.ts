import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents19Component } from './contents-19.component';

describe('Contents19Component', () => {
  let component: Contents19Component;
  let fixture: ComponentFixture<Contents19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});