import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLandingThreeComponent } from './index-landing-three.component';

describe('IndexLandingThreeComponent', () => {
  let component: IndexLandingThreeComponent;
  let fixture: ComponentFixture<IndexLandingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLandingThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLandingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
