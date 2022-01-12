import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCoverRePasswordComponent } from './auth-cover-re-password.component';

describe('AuthCoverRePasswordComponent', () => {
  let component: AuthCoverRePasswordComponent;
  let fixture: ComponentFixture<AuthCoverRePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCoverRePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCoverRePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
