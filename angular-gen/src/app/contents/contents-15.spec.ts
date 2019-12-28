import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents15Component } from './contents-15.component';

describe('Contents15Component', () => {
  let component: Contents15Component;
  let fixture: ComponentFixture<Contents15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});