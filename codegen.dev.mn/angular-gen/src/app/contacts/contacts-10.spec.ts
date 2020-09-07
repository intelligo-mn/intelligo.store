import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts10Component } from './contacts-10.component';

describe('Contacts10Component', () => {
  let component: Contacts10Component;
  let fixture: ComponentFixture<Contacts10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});