import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingleProductComponent } from './index-single-product.component';

describe('IndexSingleProductComponent', () => {
  let component: IndexSingleProductComponent;
  let fixture: ComponentFixture<IndexSingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSingleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
