import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ToastService, ToastType, NizInput } from '@notiz/ngx-design';
import { GoogleAnalyticsService } from '@services/google-analytics.service';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],
})
export class NewsletterSignupComponent implements OnInit {
  newsletterSignup: FormGroup;
  pending = false;
  invalid = false;

  @ViewChild(NizInput) input: NizInput;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private toast: ToastService,
    public element: ElementRef<HTMLElement>,
    private analytics: GoogleAnalyticsService
  ) {
    this.setupForm();
  }

  ngOnInit(): void {}

  private setupForm() {
    this.newsletterSignup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  signupNewsletter() {
    if (this.newsletterSignup.valid) {
      this.analytics.trigger('newsletter submit with email', 'engagement');
      this.pending = true;
      return this.http
        .post(
          'https://notiz-dev-api.herokuapp.com/subscribe',
          this.newsletterSignup.value
        )
        .pipe(
          tap(() => (this.pending = false)),
          tap(() => this.analytics.trigger('newsletter subscribe', 'engagement')),
          tap(() => {
            this.toast.show({
              type: ToastType.SUCCESS,
              duration: 4000,
              text:
                'Successfully subscribed to notiz.dev. Check your email. 📮',
            });
          })
        )
        .subscribe();
    }
    this.invalid = true;
    this.analytics.trigger('newsletter submit without email', 'engagement');

    this.toast.show({
      type: ToastType.ERROR,
      duration: 4000,
      text: 'Please enter your mail address. 📧',
    });
  }

  focus() {
    this.input.input.nativeElement.focus();
  }

  nizFocus() {
    this.invalid = false;
    this.analytics.trigger('newsletter focus', 'engagement');
  }
}
