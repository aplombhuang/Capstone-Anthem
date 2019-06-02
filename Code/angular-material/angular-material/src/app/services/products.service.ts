import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  productsData = [
    {
      id: 1,
      imageUrl: '../../assets/img/iphone-1.png',
      name: 'iPhone 6 64GB unlocked black',
      visit: 2345,
      price: '$ 679'
    },
    {
      id: 2,
      imageUrl: '../../assets/img/iphone7.png',
      name: 'iPhone 7 128GB Matblack',
      visit: 4235,
      price: '$ 789'
    },
    {
      id: 3,
      imageUrl: '../../assets/img/iphone-se.png',
      name: 'iPhone SE 32GB Gold',
      visit: 423,
      price: '$ 499'
    },
    {
      id: 4,
      imageUrl: '../../assets/img/iphone-1.png',
      name: 'iPhone 6 64GB unlocked black',
      visit: 2345,
      price: '$ 679'
    },
    {
      id: 5,
      imageUrl: '../../assets/img/iphone7.png',
      name: 'iPhone 7 128GB Matblack',
      visit: 4235,
      price: '$ 789'
    },

  ]

}
