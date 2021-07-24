import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() {}

  ngOnInit(): void {}
}
