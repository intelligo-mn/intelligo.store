import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactThreeComponent } from './page-contact-three.component';

describe('PageContactThreeComponent', () => {
  let component: PageContactThreeComponent;
  let fixture: ComponentFixture<PageContactThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContactThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
