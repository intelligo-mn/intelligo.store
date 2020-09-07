import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contacts02Component } from './contacts-02.component';

describe('Contacts02Component', () => {
  let component: Contacts02Component;
  let fixture: ComponentFixture<Contacts02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});