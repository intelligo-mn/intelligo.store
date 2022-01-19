import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCaseDetailComponent } from './page-case-detail.component';

describe('PageCaseDetailComponent', () => {
  let component: PageCaseDetailComponent;
  let fixture: ComponentFixture<PageCaseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCaseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
