import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEnterpriseComponent } from './index-enterprise.component';

describe('IndexEnterpriseComponent', () => {
  let component: IndexEnterpriseComponent;
  let fixture: ComponentFixture<IndexEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
