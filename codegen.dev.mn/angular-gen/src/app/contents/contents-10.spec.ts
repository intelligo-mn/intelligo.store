import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents10Component } from './contents-10.component';

describe('Contents10Component', () => {
  let component: Contents10Component;
  let fixture: ComponentFixture<Contents10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});