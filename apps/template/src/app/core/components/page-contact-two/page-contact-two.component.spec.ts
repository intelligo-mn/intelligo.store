import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactTwoComponent } from './page-contact-two.component';

describe('PageContactTwoComponent', () => {
  let component: PageContactTwoComponent;
  let fixture: ComponentFixture<PageContactTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContactTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
