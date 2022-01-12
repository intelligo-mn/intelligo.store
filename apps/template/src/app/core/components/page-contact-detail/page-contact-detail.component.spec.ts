import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactDetailComponent } from './page-contact-detail.component';

describe('PageContactDetailComponent', () => {
  let component: PageContactDetailComponent;
  let fixture: ComponentFixture<PageContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContactDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
