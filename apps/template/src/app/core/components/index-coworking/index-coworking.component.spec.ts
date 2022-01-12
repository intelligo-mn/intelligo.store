import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCoworkingComponent } from './index-coworking.component';

describe('IndexCoworkingComponent', () => {
  let component: IndexCoworkingComponent;
  let fixture: ComponentFixture<IndexCoworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCoworkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCoworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
