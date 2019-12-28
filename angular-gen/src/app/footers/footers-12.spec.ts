import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers12Component } from './footers-12.component';

describe('Footers12Component', () => {
  let component: Footers12Component;
  let fixture: ComponentFixture<Footers12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});