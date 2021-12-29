import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPasswordResetComponent } from './email-password-reset.component';

describe('EmailPasswordResetComponent', () => {
  let component: EmailPasswordResetComponent;
  let fixture: ComponentFixture<EmailPasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPasswordResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
