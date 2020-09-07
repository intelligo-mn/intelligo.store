import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsViewComponent } from './tags-view.component';

describe('TagsViewComponent', () => {
  let component: TagsViewComponent;
  let fixture: ComponentFixture<TagsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
