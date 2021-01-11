import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventManager } from '@devmn/event-manager';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';
import { ITEMS_PER_PAGE } from 'src/app/shared/constants/pagination.constants';
import { ICategory } from 'src/app/shared/model/category.model';
import { CategoryUpdateComponent } from './category-update.component';
import { CategoryService } from './category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit, OnDestroy {
  categories?: ICategory[];
  eventSubscriber?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;

  constructor(
    protected categoryService: CategoryService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected eventManager: EventManager,
    protected modalService: NgbModal
  ) {}

  loadPage(page?: number): void {
    const pageToLoad: number = page || this.page;

    this.categoryService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<ICategory[]>) => this.onSuccess(res.body, res.headers, pageToLoad),
        () => this.onError()
      );
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.page = data.pagingParams.page;
      this.ascending = data.pagingParams.ascending;
      this.predicate = data.pagingParams.predicate;
      this.ngbPaginationPage = data.pagingParams.page;
      this.loadPage();
    });
    this.registerChangeInCategories();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICategory): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInCategories(): void {
    this.eventSubscriber = this.eventManager.subscribe('categoryListModification', () => this.loadPage());
  }

  delete(category: ICategory): void {
    const modalRef = this.modalService.open(DeleteDialogComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.category = category;
  }

  add() {
    this.modalService.open(CategoryUpdateComponent, { size: 'lg' });
  }

  edit(category: ICategory) {
    const inst = this.modalService.open(CategoryUpdateComponent, { size: 'lg' });
    inst.componentInstance.category = category;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: ICategory[] | null, headers: HttpHeaders, page: number): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    this.router.navigate(['/category'], {
      queryParams: {
        page: this.page,
        size: this.itemsPerPage,
        sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
      },
    });
    this.categories = data || [];
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page;
  }
}
