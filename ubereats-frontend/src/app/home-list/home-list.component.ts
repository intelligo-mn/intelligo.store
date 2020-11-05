import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  datas: Object[];

  constructor() {
    this.datas = [
      {
        key: 1,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 2,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 3,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 4,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 5,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 6,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 7,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 8,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 9,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 10,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 11,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
      {
        key: 12,
        name: 'Demo food name',
        price: '20.00$',
        image: '../../assets/images/food.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
