import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCasesComponent } from './page-cases.component';

describe('PageCasesComponent', () => {
  let component: PageCasesComponent;
  let fixture: ComponentFixture<PageCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
