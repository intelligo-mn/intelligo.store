import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLandingTwoComponent } from './index-landing-two.component';

describe('IndexLandingTwoComponent', () => {
  let component: IndexLandingTwoComponent;
  let fixture: ComponentFixture<IndexLandingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLandingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLandingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
