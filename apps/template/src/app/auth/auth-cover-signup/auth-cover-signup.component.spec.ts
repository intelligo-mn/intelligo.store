import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCoverSignupComponent } from './auth-cover-signup.component';

describe('AuthCoverSignupComponent', () => {
  let component: AuthCoverSignupComponent;
  let fixture: ComponentFixture<AuthCoverSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCoverSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCoverSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
