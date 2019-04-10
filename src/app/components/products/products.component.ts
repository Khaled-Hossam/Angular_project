import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/ProductModel';
import { ProductService } from "../../services/product.service";
@Component({
selector: 'app-products',
templateUrl: './products.component.html',
styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    public products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.findAll();
    }

}