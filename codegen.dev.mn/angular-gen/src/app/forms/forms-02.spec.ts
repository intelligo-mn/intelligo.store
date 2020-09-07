import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms02Component } from './forms-02.component';

describe('Forms02Component', () => {
  let component: Forms02Component;
  let fixture: ComponentFixture<Forms02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});