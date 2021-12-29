import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBusinessComponent } from './index-business.component';

describe('IndexBusinessComponent', () => {
  let component: IndexBusinessComponent;
  let fixture: ComponentFixture<IndexBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
