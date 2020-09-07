import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers08Component } from './footers-08.component';

describe('Footers08Component', () => {
  let component: Footers08Component;
  let fixture: ComponentFixture<Footers08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});