import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  alerts: any[] = [];

  private show(text: string, options: any = {}) {
    this.alerts.push({ text, ...options });
  }

  public success(message: string, delay?: number) {
    this.show(message, { className: 'ngb-toasts alert alert-success', delay: delay == null ? 5000 : delay });
  }

  public error(message: string, delay?: number) {
    this.show(message, { className: 'ngb-toasts alert alert-danger text-light', delay: delay == null ? 5000 : delay });
  }

  public alert(message: string, delay?: number) {
    this.show(message, { className: 'ngb-toasts alert alert-info text-light', delay: delay == null ? 5000 : delay });
  }

  remove(toast) {
    this.alerts = this.alerts.filter(t => t !== toast);
  }
}
