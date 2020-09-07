import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers10Component } from './footers-10.component';

describe('Footers10Component', () => {
  let component: Footers10Component;
  let fixture: ComponentFixture<Footers10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});