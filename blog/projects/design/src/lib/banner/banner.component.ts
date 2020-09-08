import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class NizBanner {

  @Input() title = 'image-template';
  @Input() updatedAt = new Date().toDateString();
  @Input() logo = 'https://blog.dev.mn/assets/img/logo.svg';
  @Input() set logos(logos: string) {
    this._logos = logos.split(',');
  }
  _logos = [];
  @Input() avatar =
    'https://avatars1.githubusercontent.com/u/8986373?s=460&v=4';
  @Input() author = 'Gary Großgarten';
  @Input() height = 630;
  @Input() width = 1200;

  @HostBinding('style.width')
  get _width() {
    return `${this.width}px`;
  }

  @HostBinding('style.height')
  get _height() {
    return `${this.height}px`;
  }
}
