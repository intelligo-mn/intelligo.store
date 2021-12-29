import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexClassicSaasComponent } from './index-classic-saas.component';

describe('IndexClassicSaasComponent', () => {
  let component: IndexClassicSaasComponent;
  let fixture: ComponentFixture<IndexClassicSaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexClassicSaasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexClassicSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
