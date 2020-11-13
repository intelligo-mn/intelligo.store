import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  datas: Object[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.datas = [
      {
        key: 1,
        name: 'Pork and mushroom vindaloo',
        price: '15.00$',
        image: '../../assets/images/food/food1.jpg',
        desc: 'Spicy vindaloo made with pork and hand-picked mushroom',
        recipe:
          'onion | peppers | garlic | ginger | tumeric | cumin | coriander | black pepper | mustard seeds | cardamon | cinnamon | white wine vinegar | cayenne | pork | mushroom',
      },
      {
        key: 2,
        name: 'Pork and chamomile stir fry',
        price: '20.00$',
        image: '../../assets/images/food/food2.jpg',
        desc: 'Crunchy stir fry featuring pork and fresh chamomile',
        recipe: 'peppers | pork | chamomile',
      },
      {
        key: 3,
        name: 'Hazelnut and sultana cupcakes',
        price: '10.00$',
        image: '../../assets/images/food/food3.jpg',
        desc: 'Crumbly cupcakes made with hazelnut and sultana',
        recipe: 'flour | butter | egg | sugar | hazelnut | sultana',
      },
      {
        key: 4,
        name: 'Mustard and cheese salad',
        price: '7.00$',
        image: '../../assets/images/food/food4.png',
        desc: 'English mustard and mature cheese served on a bed of lettuce',
        recipe: 'lettuce | mustard | cheese',
      },
      {
        key: 5,
        name: 'Gorgonzola and plumcot salad',
        price: '17.00$',
        image: '../../assets/images/food/food5.jpg',
        desc: 'Gorgonzola and fresh plumcot served on a bed of lettuce',
        recipe: 'lettuce | gorgonzola | plumcot',
      },
      {
        key: 6,
        name: 'Tofu and pepper sushi',
        price: '16.00$',
        image: '../../assets/images/food/food6.jpg',
        desc: 'Silken tofu and yellow pepper on a bed of sushi rice',
        recipe: 'rice | rice vinegar | sugar | tofu | pepper',
      },
      {
        key: 7,
        name: 'Chilli and pecan pie',
        price: '19.00$',
        image: '../../assets/images/food/food7.jpg',
        desc: 'A puff pasty case filled with firey chilli and pecan',
        recipe: 'flour | butter | water | salt | onions | chilli | pecan',
      },
      {
        key: 8,
        name: 'Pak choi and manchego salad',
        price: '14.00$',
        image: '../../assets/images/food/food8.jpg',
        desc: 'Pak choi and manchego served on a bed of lettuce',
        recipe: 'lettuce | pak choi | manchego',
      },
      {
        key: 9,
        name: 'Fish and egg vindaloo',
        price: '20.00$',
        image: '../../assets/images/food/food9.jpg',
        desc: 'Spicy vindaloo made with fish and free range eggs',
        recipe:
          'onion | peppers | garlic | ginger | tumeric | cumin | coriander | black pepper | mustard seeds | cardamon | cinnamon | white wine vinegar | cayenne | fish | egg',
      },
      {
        key: 10,
        name: 'Courgette and cheddar fritters',
        price: '20.00$',
        image: '../../assets/images/food/food10.jpg',
        desc: 'Fluffy fritters filled with baby courgette and cheddar',
        recipe: 'flour | butter | egg | milk | courgette | cheddar',
      },
      {
        key: 11,
        name: 'Pepper and peanut curry',
        price: '20.00$',
        image: '../../assets/images/food/food11.jpg',
        desc: 'Hot curry made with orange pepper and peanut',
        recipe:
          'onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | pepper | peanut',
      },
      {
        key: 12,
        name: 'Iskender and pineapple skewers',
        price: '20.00$',
        image: '../../assets/images/food/food12.jpg',
        desc: 'Bamboo skewers loaded with iskender and fresh pineapple',
        recipe: 'onions | iskender | pineapple',
      },
    ];
  }

  showDetail(item: any) {
    this.router.navigate([`item/${item.key}`], { relativeTo: this.route });
  }

  ngOnInit(): void {}
}
