import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers05Component } from './footers-05.component';

describe('Footers05Component', () => {
  let component: Footers05Component;
  let fixture: ComponentFixture<Footers05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});