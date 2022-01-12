import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInvoiceComponent } from './email-invoice.component';

describe('EmailInvoiceComponent', () => {
  let component: EmailInvoiceComponent;
  let fixture: ComponentFixture<EmailInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
