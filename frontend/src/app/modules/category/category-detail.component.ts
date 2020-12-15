import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategory } from 'src/app/shared/model/category.model';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent implements OnInit {
  category: ICategory | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ category }) => (this.category = category));
  }

  previousState(): void {
    window.history.back();
  }
}
