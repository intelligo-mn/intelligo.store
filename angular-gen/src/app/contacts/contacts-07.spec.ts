import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts07Component } from './contacts-07.component';

describe('Contacts07Component', () => {
  let component: Contacts07Component;
  let fixture: ComponentFixture<Contacts07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});