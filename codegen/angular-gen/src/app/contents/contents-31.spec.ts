import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents31Component } from './contents-31.component';

describe('Contents31Component', () => {
  let component: Contents31Component;
  let fixture: ComponentFixture<Contents31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});