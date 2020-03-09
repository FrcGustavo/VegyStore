import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'VegyStore';

  items = ['nicolas', 'julian', 'perez'];
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

  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
