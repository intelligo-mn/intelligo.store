import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUnit } from 'src/app/shared/model/unit.model';

@Component({
  selector: 'unit-detail',
  templateUrl: './unit-detail.component.html',
})
export class UnitDetailComponent implements OnInit {
  unit: IUnit | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ unit }) => (this.unit = unit));
  }

  previousState(): void {
    window.history.back();
  }
}
