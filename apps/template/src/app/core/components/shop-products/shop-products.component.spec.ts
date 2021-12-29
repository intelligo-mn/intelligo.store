import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsComponent } from './shop-products.component';

describe('ShopProductsComponent', () => {
  let component: ShopProductsComponent;
  let fixture: ComponentFixture<ShopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
