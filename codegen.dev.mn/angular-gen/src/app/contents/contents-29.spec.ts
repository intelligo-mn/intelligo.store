import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents29Component } from './contents-29.component';

describe('Contents29Component', () => {
  let component: Contents29Component;
  let fixture: ComponentFixture<Contents29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});