import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts05Component } from './contacts-05.component';

describe('Contacts05Component', () => {
  let component: Contacts05Component;
  let fixture: ComponentFixture<Contacts05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});