import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core' ;
import { Product } from '../../../product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today: Date = new Date();

  ngOnInit() {

  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
