import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHostingComponent } from './index-hosting.component';

describe('IndexHostingComponent', () => {
  let component: IndexHostingComponent;
  let fixture: ComponentFixture<IndexHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexHostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
