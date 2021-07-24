import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../utils/symbols';

@Component({
  selector: 'niz-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class NizTabs implements OnInit {
  @Input() tabs: Tab[];

  constructor() {}

  ngOnInit(): void {}
}
