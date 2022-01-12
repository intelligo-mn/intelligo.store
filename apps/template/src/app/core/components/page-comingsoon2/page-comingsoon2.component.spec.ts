import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComingsoon2Component } from './page-comingsoon2.component';

describe('PageComingsoon2Component', () => {
  let component: PageComingsoon2Component;
  let fixture: ComponentFixture<PageComingsoon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageComingsoon2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComingsoon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
