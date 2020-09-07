import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents12Component } from './contents-12.component';

describe('Contents12Component', () => {
  let component: Contents12Component;
  let fixture: ComponentFixture<Contents12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});