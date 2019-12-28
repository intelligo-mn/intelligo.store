import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers02Component } from './headers-02.component';

describe('Headers02Component', () => {
  let component: Headers02Component;
  let fixture: ComponentFixture<Headers02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});