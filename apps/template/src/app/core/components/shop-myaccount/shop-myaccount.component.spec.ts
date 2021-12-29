import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMyaccountComponent } from './shop-myaccount.component';

describe('ShopMyaccountComponent', () => {
  let component: ShopMyaccountComponent;
  let fixture: ComponentFixture<ShopMyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMyaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
