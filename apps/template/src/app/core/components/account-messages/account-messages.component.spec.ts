import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMessagesComponent } from './account-messages.component';

describe('AccountMessagesComponent', () => {
  let component: AccountMessagesComponent;
  let fixture: ComponentFixture<AccountMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
