import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers07Component } from './footers-07.component';

describe('Footers07Component', () => {
  let component: Footers07Component;
  let fixture: ComponentFixture<Footers07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});