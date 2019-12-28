import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers03Component } from './footers-03.component';

describe('Footers03Component', () => {
  let component: Footers03Component;
  let fixture: ComponentFixture<Footers03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});