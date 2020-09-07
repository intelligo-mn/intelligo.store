import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts06Component } from './contacts-06.component';

describe('Contacts06Component', () => {
  let component: Contacts06Component;
  let fixture: ComponentFixture<Contacts06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});