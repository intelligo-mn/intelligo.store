import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMarketingComponent } from './index-marketing.component';

describe('IndexMarketingComponent', () => {
  let component: IndexMarketingComponent;
  let fixture: ComponentFixture<IndexMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
