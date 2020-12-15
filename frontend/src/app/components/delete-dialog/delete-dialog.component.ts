import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { DeleteService } from 'src/app/shared/services/delete.service';

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  url: any;
  resourceToDelete: any;
  broadcastName: any;

  isQueryParams: boolean = false;

  constructor(protected deleteService: DeleteService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
    window.history.back();
  }

  confirmDelete(id: number, url: string, broadcastName: string) {
    this.deleteService.delete(id, url, this.isQueryParams).subscribe(response => {
      this.eventManager.broadcast({
        name: broadcastName,
        content: 'Deleted a content',
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'delete-popup',
  template: '',
})
export class DeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected router: Router, protected activatedRoute: ActivatedRoute, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ resourceToDelete, deleteUrl, queryParams, broadcastName }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(DeleteDialogComponent as Component, {
          backdrop: 'static',
          centered: true,
          windowClass: 'delete-dialog',
        });
        this.ngbModalRef.componentInstance.resourceToDelete = resourceToDelete;
        this.ngbModalRef.componentInstance.url = deleteUrl;
        this.ngbModalRef.componentInstance.isQueryParams = queryParams ? true : false;
        this.ngbModalRef.componentInstance.broadcastName = broadcastName;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate([{ outlets: { popup: null } }], { relativeTo: this.activatedRoute.parent });
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate([{ outlets: { popup: null } }], { relativeTo: this.activatedRoute.parent });
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
