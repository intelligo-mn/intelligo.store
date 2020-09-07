import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts04Component } from './contacts-04.component';

describe('Contacts04Component', () => {
  let component: Contacts04Component;
  let fixture: ComponentFixture<Contacts04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});