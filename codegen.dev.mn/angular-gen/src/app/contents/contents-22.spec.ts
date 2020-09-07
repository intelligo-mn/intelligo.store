import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Contents22Component } from './contents-22.component';

describe('Contents22Component', () => {
  let component: Contents22Component;
  let fixture: ComponentFixture<Contents22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});