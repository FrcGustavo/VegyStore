import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/brote.jpg',
      title: 'Brote de albahcar',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/brote.jpg',
      title: 'Brote de albahcar',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/brote.jpg',
      title: 'Brote de albahcar',
      price: 15,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find(item => id === item.id);
  }
}
