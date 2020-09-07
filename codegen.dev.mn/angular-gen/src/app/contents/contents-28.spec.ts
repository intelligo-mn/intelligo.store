import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents28Component } from './contents-28.component';

describe('Contents28Component', () => {
  let component: Contents28Component;
  let fixture: ComponentFixture<Contents28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});