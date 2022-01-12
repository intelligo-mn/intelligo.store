import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexServicesComponent } from './index-services.component';

describe('IndexServicesComponent', () => {
  let component: IndexServicesComponent;
  let fixture: ComponentFixture<IndexServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
