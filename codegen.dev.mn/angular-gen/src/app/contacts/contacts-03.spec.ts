import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts03Component } from './contacts-03.component';

describe('Contacts03Component', () => {
  let component: Contacts03Component;
  let fixture: ComponentFixture<Contacts03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});