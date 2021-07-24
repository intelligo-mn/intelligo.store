import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSignupComponent } from './newsletter-signup.component';

describe('NewsletterSignupComponent', () => {
  let component: NewsletterSignupComponent;
  let fixture: ComponentFixture<NewsletterSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterSignupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
