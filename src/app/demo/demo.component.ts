import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Vegy';
  power = 2;

  items = ['nicolas', 'julian', 'perez'];


  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
