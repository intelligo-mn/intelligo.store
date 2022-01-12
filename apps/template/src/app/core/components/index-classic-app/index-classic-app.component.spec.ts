import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexClassicAppComponent } from './index-classic-app.component';

describe('IndexClassicAppComponent', () => {
  let component: IndexClassicAppComponent;
  let fixture: ComponentFixture<IndexClassicAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexClassicAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexClassicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
