import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPersonalComponent } from './index-personal.component';

describe('IndexPersonalComponent', () => {
  let component: IndexPersonalComponent;
  let fixture: ComponentFixture<IndexPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
