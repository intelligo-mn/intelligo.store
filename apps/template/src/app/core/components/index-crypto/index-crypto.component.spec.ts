import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCryptoComponent } from './index-crypto.component';

describe('IndexCryptoComponent', () => {
  let component: IndexCryptoComponent;
  let fixture: ComponentFixture<IndexCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
