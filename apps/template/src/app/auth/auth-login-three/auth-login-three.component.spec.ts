import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginThreeComponent } from './auth-login-three.component';

describe('AuthLoginThreeComponent', () => {
  let component: AuthLoginThreeComponent;
  let fixture: ComponentFixture<AuthLoginThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
