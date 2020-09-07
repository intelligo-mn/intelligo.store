import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterUnsubscribeComponent } from './newsletter-unsubscribe.component';

describe('NewsletterUnsubscribeComponent', () => {
  let component: NewsletterUnsubscribeComponent;
  let fixture: ComponentFixture<NewsletterUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
