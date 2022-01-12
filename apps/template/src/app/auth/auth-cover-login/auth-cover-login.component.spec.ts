import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCoverLoginComponent } from './auth-cover-login.component';

describe('AuthCoverLoginComponent', () => {
  let component: AuthCoverLoginComponent;
  let fixture: ComponentFixture<AuthCoverLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCoverLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCoverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
