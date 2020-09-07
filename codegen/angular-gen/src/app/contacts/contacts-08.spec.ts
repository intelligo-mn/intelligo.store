import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts08Component } from './contacts-08.component';

describe('Contacts08Component', () => {
  let component: Contacts08Component;
  let fixture: ComponentFixture<Contacts08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});