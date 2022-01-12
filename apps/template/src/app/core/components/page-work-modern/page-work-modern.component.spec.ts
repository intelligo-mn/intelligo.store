import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkModernComponent } from './page-work-modern.component';

describe('PageWorkModernComponent', () => {
  let component: PageWorkModernComponent;
  let fixture: ComponentFixture<PageWorkModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkModernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
