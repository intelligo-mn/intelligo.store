import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupThreeComponent } from './auth-signup-three.component';

describe('AuthSignupThreeComponent', () => {
  let component: AuthSignupThreeComponent;
  let fixture: ComponentFixture<AuthSignupThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSignupThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
