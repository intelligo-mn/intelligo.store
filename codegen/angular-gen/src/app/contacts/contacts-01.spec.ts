import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts01Component } from './contacts-01.component';

describe('Contacts01Component', () => {
  let component: Contacts01Component;
  let fixture: ComponentFixture<Contacts01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});