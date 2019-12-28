import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents21Component } from './contents-21.component';

describe('Contents21Component', () => {
  let component: Contents21Component;
  let fixture: ComponentFixture<Contents21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});