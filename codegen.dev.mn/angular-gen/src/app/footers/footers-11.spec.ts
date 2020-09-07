import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers11Component } from './footers-11.component';

describe('Footers11Component', () => {
  let component: Footers11Component;
  let fixture: ComponentFixture<Footers11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});