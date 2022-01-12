import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAppsComponent } from './index-apps.component';

describe('IndexAppsComponent', () => {
  let component: IndexAppsComponent;
  let fixture: ComponentFixture<IndexAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
