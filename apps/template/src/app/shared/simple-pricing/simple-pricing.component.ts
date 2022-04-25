import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-pricing',
  templateUrl: './simple-pricing.component.html',
  styleUrls: ['./simple-pricing.component.css']
})
export class SimplePricingComponent implements OnInit {

  @Input() simple_pricingData: Array<{
    warning?: string,
    title: string,
    price: number,
    list?: Array<[]>,
    btn?: string,
  }>;

  constructor() { }

  ngOnInit(): void {
  }

}
