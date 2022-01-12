import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsTopicComponent } from './forums-topic.component';

describe('ForumsTopicComponent', () => {
  let component: ForumsTopicComponent;
  let fixture: ComponentFixture<ForumsTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumsTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
