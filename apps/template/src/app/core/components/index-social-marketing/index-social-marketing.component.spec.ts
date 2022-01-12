import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSocialMarketingComponent } from './index-social-marketing.component';

describe('IndexSocialMarketingComponent', () => {
  let component: IndexSocialMarketingComponent;
  let fixture: ComponentFixture<IndexSocialMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSocialMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSocialMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
