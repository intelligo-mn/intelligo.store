import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts09Component } from './contacts-09.component';

describe('Contacts09Component', () => {
  let component: Contacts09Component;
  let fixture: ComponentFixture<Contacts09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});