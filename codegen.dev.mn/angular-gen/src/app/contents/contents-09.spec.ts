import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents09Component } from './contents-09.component';

describe('Contents09Component', () => {
  let component: Contents09Component;
  let fixture: ComponentFixture<Contents09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});