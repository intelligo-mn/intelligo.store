import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShopComponent } from './index-shop.component';

describe('IndexShopComponent', () => {
  let component: IndexShopComponent;
  let fixture: ComponentFixture<IndexShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
