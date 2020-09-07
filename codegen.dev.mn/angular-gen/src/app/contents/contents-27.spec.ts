import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents27Component } from './contents-27.component';

describe('Contents27Component', () => {
  let component: Contents27Component;
  let fixture: ComponentFixture<Contents27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});