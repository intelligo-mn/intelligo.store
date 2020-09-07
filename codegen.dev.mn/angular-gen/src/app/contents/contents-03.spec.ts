import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents03Component } from './contents-03.component';

describe('Contents03Component', () => {
  let component: Contents03Component;
  let fixture: ComponentFixture<Contents03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});