import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  constructor( public products: ProductsListService) { }

  ngOnInit() {
  }

}
