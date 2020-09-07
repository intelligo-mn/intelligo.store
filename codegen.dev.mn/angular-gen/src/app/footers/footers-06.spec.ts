import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers06Component } from './footers-06.component';

describe('Footers06Component', () => {
  let component: Footers06Component;
  let fixture: ComponentFixture<Footers06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});