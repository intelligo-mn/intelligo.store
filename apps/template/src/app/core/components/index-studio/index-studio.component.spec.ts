import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStudioComponent } from './index-studio.component';

describe('IndexStudioComponent', () => {
  let component: IndexStudioComponent;
  let fixture: ComponentFixture<IndexStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
