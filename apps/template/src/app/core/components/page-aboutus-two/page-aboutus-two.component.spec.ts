import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutusTwoComponent } from './page-aboutus-two.component';

describe('PageAboutusTwoComponent', () => {
  let component: PageAboutusTwoComponent;
  let fixture: ComponentFixture<PageAboutusTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutusTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutusTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
