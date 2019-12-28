import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents08Component } from './contents-08.component';

describe('Contents08Component', () => {
  let component: Contents08Component;
  let fixture: ComponentFixture<Contents08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});