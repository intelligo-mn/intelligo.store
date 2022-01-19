import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTravelComponent } from './index-travel.component';

describe('IndexTravelComponent', () => {
  let component: IndexTravelComponent;
  let fixture: ComponentFixture<IndexTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
