import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents02Component } from './contents-02.component';

describe('Contents02Component', () => {
  let component: Contents02Component;
  let fixture: ComponentFixture<Contents02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});