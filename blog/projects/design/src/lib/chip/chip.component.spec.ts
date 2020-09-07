import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NizChip } from './chip.component';

describe('NizChip', () => {
  let component: NizChip;
  let fixture: ComponentFixture<NizChip>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NizChip],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NizChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
