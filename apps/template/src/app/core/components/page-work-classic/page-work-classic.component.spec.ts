import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkClassicComponent } from './page-work-classic.component';

describe('PageWorkClassicComponent', () => {
  let component: PageWorkClassicComponent;
  let fixture: ComponentFixture<PageWorkClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkClassicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
