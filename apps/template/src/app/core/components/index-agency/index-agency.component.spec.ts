import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAgencyComponent } from './index-agency.component';

describe('IndexAgencyComponent', () => {
  let component: IndexAgencyComponent;
  let fixture: ComponentFixture<IndexAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
