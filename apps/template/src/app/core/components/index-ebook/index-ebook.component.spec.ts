import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEbookComponent } from './index-ebook.component';

describe('IndexEbookComponent', () => {
  let component: IndexEbookComponent;
  let fixture: ComponentFixture<IndexEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
