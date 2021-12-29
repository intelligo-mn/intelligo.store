import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCarRidingComponent } from './index-car-riding.component';

describe('IndexCarRidingComponent', () => {
  let component: IndexCarRidingComponent;
  let fixture: ComponentFixture<IndexCarRidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCarRidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCarRidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
