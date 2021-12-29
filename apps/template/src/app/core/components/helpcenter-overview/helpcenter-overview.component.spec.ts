import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterOverviewComponent } from './helpcenter-overview.component';

describe('HelpcenterOverviewComponent', () => {
  let component: HelpcenterOverviewComponent;
  let fixture: ComponentFixture<HelpcenterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpcenterOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpcenterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
