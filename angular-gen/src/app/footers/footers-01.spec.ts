import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers01Component } from './footers-01.component';

describe('Footers01Component', () => {
  let component: Footers01Component;
  let fixture: ComponentFixture<Footers01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});