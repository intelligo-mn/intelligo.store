import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactOneComponent } from './page-contact-one.component';

describe('PageContactOneComponent', () => {
  let component: PageContactOneComponent;
  let fixture: ComponentFixture<PageContactOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContactOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
