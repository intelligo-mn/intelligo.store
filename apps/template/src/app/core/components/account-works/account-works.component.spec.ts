import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWorksComponent } from './account-works.component';

describe('AccountWorksComponent', () => {
  let component: AccountWorksComponent;
  let fixture: ComponentFixture<AccountWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
