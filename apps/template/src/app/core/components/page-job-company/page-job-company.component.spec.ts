import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobCompanyComponent } from './page-job-company.component';

describe('PageJobCompanyComponent', () => {
  let component: PageJobCompanyComponent;
  let fixture: ComponentFixture<PageJobCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJobCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJobCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
