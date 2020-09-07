import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents20Component } from './contents-20.component';

describe('Contents20Component', () => {
  let component: Contents20Component;
  let fixture: ComponentFixture<Contents20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});