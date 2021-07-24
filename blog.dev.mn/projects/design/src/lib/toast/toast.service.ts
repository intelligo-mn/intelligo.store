import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastOptions } from './toast.options';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toast: Subject<ToastOptions> = new Subject();
  toast: Observable<ToastOptions> = this._toast.asObservable();

  constructor() {}

  show(options: ToastOptions) {
    this._toast.next(options);
  }

  hide() {
    this._toast.next(null);
  }
}
