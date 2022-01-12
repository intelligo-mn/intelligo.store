import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkMasonryComponent } from './page-work-masonry.component';

describe('PageWorkMasonryComponent', () => {
  let component: PageWorkMasonryComponent;
  let fixture: ComponentFixture<PageWorkMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkMasonryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
