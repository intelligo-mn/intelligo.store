import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermsComponent } from './page-terms.component';

describe('PageTermsComponent', () => {
  let component: PageTermsComponent;
  let fixture: ComponentFixture<PageTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
