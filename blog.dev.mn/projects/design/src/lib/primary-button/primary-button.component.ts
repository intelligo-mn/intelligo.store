import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'niz-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input() href: string;
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}
}
