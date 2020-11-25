import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageFormComponent } from './package-form.component';

describe('PackageFormComponent', () => {
  let component: PackageFormComponent;
  let fixture: ComponentFixture<PackageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
