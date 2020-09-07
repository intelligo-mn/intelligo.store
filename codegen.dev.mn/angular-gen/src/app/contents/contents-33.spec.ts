import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents33Component } from './contents-33.component';

describe('Contents33Component', () => {
  let component: Contents33Component;
  let fixture: ComponentFixture<Contents33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});