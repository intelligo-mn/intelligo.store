import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers02Component } from './footers-02.component';

describe('Footers02Component', () => {
  let component: Footers02Component;
  let fixture: ComponentFixture<Footers02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});