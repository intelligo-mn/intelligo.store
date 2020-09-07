import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers09Component } from './footers-09.component';

describe('Footers09Component', () => {
  let component: Footers09Component;
  let fixture: ComponentFixture<Footers09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});