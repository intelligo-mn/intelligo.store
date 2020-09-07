import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents34Component } from './contents-34.component';

describe('Contents34Component', () => {
  let component: Contents34Component;
  let fixture: ComponentFixture<Contents34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});