import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTagsComponent } from './sidebar-tags.component';

describe('SidebarTagsComponent', () => {
  let component: SidebarTagsComponent;
  let fixture: ComponentFixture<SidebarTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
