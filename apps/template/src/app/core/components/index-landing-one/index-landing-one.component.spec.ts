import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLandingOneComponent } from './index-landing-one.component';

describe('IndexLandingOneComponent', () => {
  let component: IndexLandingOneComponent;
  let fixture: ComponentFixture<IndexLandingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLandingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLandingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
