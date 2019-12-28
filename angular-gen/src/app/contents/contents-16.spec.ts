import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents16Component } from './contents-16.component';

describe('Contents16Component', () => {
  let component: Contents16Component;
  let fixture: ComponentFixture<Contents16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});