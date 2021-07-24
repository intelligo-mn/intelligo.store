import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSocialLinksComponent } from './sidebar-social-links.component';

describe('SidebarSocialLinksComponent', () => {
  let component: SidebarSocialLinksComponent;
  let fixture: ComponentFixture<SidebarSocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSocialLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
