import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkDetailComponent } from './page-work-detail.component';

describe('PageWorkDetailComponent', () => {
  let component: PageWorkDetailComponent;
  let fixture: ComponentFixture<PageWorkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
