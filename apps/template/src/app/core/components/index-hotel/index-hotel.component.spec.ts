import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHotelComponent } from './index-hotel.component';

describe('IndexHotelComponent', () => {
  let component: IndexHotelComponent;
  let fixture: ComponentFixture<IndexHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
