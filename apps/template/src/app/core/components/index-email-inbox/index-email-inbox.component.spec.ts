import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEmailInboxComponent } from './index-email-inbox.component';

describe('IndexEmailInboxComponent', () => {
  let component: IndexEmailInboxComponent;
  let fixture: ComponentFixture<IndexEmailInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEmailInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEmailInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
