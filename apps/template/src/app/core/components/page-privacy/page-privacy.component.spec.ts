import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrivacyComponent } from './page-privacy.component';

describe('PagePrivacyComponent', () => {
  let component: PagePrivacyComponent;
  let fixture: ComponentFixture<PagePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
