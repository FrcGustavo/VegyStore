import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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

  ngOnInit(): void {
  }

  handleClickProduct(id: number) {
    console.log('ProductId', id);
  }
}
