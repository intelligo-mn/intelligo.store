import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents01Component } from './contents-01.component';

describe('Contents01Component', () => {
  let component: Contents01Component;
  let fixture: ComponentFixture<Contents01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});