import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngFor="let alert of alertService.alerts"
      [class]="alert.className"
      [autohide]="true"
      [delay]="alert.delay || 5000"
      (hide)="alertService.remove(alert)"
    >
      {{ alert.text }}
    </ngb-toast>
  `,
  host: { '[class.ngb-toasts]': 'true' },
})
export class AlertComponent {
  constructor(public alertService: AlertService) {}
}
