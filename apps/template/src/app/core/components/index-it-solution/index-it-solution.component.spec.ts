import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexItSolutionComponent } from './index-it-solution.component';

describe('IndexItSolutionComponent', () => {
  let component: IndexItSolutionComponent;
  let fixture: ComponentFixture<IndexItSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexItSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexItSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
