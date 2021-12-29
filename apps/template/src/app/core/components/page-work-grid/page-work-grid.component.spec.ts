import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkGridComponent } from './page-work-grid.component';

describe('PageWorkGridComponent', () => {
  let component: PageWorkGridComponent;
  let fixture: ComponentFixture<PageWorkGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
