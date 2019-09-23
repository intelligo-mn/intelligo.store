import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCommentsComponent } from './item-comments.component';

describe('ItemCommentsComponent', () => {
  let component: ItemCommentsComponent;
  let fixture: ComponentFixture<ItemCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
