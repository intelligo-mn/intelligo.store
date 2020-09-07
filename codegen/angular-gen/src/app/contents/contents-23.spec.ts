import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents23Component } from './contents-23.component';

describe('Contents23Component', () => {
  let component: Contents23Component;
  let fixture: ComponentFixture<Contents23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});