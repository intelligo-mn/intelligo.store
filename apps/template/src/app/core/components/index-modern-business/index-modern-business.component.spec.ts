import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexModernBusinessComponent } from './index-modern-business.component';

describe('IndexModernBusinessComponent', () => {
  let component: IndexModernBusinessComponent;
  let fixture: ComponentFixture<IndexModernBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexModernBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexModernBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
