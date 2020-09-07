import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents24Component } from './contents-24.component';

describe('Contents24Component', () => {
  let component: Contents24Component;
  let fixture: ComponentFixture<Contents24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});