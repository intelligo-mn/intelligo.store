import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutusComponent } from './page-aboutus.component';

describe('PageAboutusComponent', () => {
  let component: PageAboutusComponent;
  let fixture: ComponentFixture<PageAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
