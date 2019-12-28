import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents25Component } from './contents-25.component';

describe('Contents25Component', () => {
  let component: Contents25Component;
  let fixture: ComponentFixture<Contents25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});