import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents07Component } from './contents-07.component';

describe('Contents07Component', () => {
  let component: Contents07Component;
  let fixture: ComponentFixture<Contents07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});