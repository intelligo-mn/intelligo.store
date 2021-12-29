import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRePasswordThreeComponent } from './auth-re-password-three.component';

describe('AuthRePasswordThreeComponent', () => {
  let component: AuthRePasswordThreeComponent;
  let fixture: ComponentFixture<AuthRePasswordThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRePasswordThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRePasswordThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
