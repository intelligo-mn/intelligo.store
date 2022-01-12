import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPaymentsComponent } from './account-payments.component';

describe('AccountPaymentsComponent', () => {
  let component: AccountPaymentsComponent;
  let fixture: ComponentFixture<AccountPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
