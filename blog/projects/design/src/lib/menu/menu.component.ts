import { Component, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'niz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private _open = false;
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}

  @HostBinding('class.open') get isOpen() {
    return this._open;
  }



  open() {
    this._open = true;
  }
  @HostListener('click') close() {
    this._open = false;
  }

  toggle() {
    this._open = !this._open;
  }
}
