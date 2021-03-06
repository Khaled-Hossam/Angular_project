import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/ProductModel';
import { ProductService } from "../../../services/product.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.products = this.productService.findAll();
  }
}
