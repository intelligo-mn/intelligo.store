import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsCommentsComponent } from './forums-comments.component';

describe('ForumsCommentsComponent', () => {
  let component: ForumsCommentsComponent;
  let fixture: ComponentFixture<ForumsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
