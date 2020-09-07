import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents35Component } from './contents-35.component';

describe('Contents35Component', () => {
  let component: Contents35Component;
  let fixture: ComponentFixture<Contents35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});