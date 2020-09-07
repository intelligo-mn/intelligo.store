import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents26Component } from './contents-26.component';

describe('Contents26Component', () => {
  let component: Contents26Component;
  let fixture: ComponentFixture<Contents26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});