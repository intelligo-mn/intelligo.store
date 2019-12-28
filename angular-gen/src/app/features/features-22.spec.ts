import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features22Component } from './features-22.component';

describe('Features22Component', () => {
  let component: Features22Component;
  let fixture: ComponentFixture<Features22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});