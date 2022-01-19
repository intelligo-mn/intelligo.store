import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCheckoutsComponent } from './shop-checkouts.component';

describe('ShopCheckoutsComponent', () => {
  let component: ShopCheckoutsComponent;
  let fixture: ComponentFixture<ShopCheckoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCheckoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCheckoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
