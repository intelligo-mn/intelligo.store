import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSoftwareComponent } from './index-software.component';

describe('IndexSoftwareComponent', () => {
  let component: IndexSoftwareComponent;
  let fixture: ComponentFixture<IndexSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
