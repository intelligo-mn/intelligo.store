import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms08Component } from './forms-08.component';

describe('Forms08Component', () => {
  let component: Forms08Component;
  let fixture: ComponentFixture<Forms08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});