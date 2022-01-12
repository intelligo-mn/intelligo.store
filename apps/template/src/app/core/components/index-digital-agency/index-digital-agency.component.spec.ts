import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDigitalAgencyComponent } from './index-digital-agency.component';

describe('IndexDigitalAgencyComponent', () => {
  let component: IndexDigitalAgencyComponent;
  let fixture: ComponentFixture<IndexDigitalAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDigitalAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDigitalAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
