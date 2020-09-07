import { Component, Input, OnInit, HostBinding, Host } from '@angular/core';

@Component({
  selector: 'niz-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class NizChip implements OnInit {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() shape: 'raised' | 'flat' = 'flat';
  @Input() hover = false;

  private xsStyles = 'text-xs';
  private smStyles = 'text-sm';
  private mdStyles = 'text-base';
  private lgStyles = 'text-lg';
  private xlStyles = 'text-xl';

  @HostBinding('class')
  get classes(): string {
    return `${this.sizeStyles} ${this.shapeStyles} ${
      this.hover ? 'hover:bg-blue-opacity-10' : ''
    }`;
  }

  constructor() {}

  ngOnInit(): void {}

  private get sizeStyles(): string {
    switch (this.size) {
      case 'xs':
        return this.xsStyles;
      case 'sm':
        return this.smStyles;
      case 'lg':
        return this.lgStyles;
      case 'xl':
        return this.xlStyles;
      case 'md':
      default:
        return this.mdStyles;
    }
  }

  private get shapeStyles(): string {
    switch (this.shape) {
      case 'flat':
        return 'py-0 shadow-none';
      case 'raised':
      default:
        return 'py-1 shadow-md';
    }
  }
}
