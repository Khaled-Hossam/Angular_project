import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/ProductModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id:string;
  product: Product;
  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.product = this.productService.find(this.id)
  }

  addToCart($event, id:string){
    $event.preventDefault()
    this.cartService.add(id);    
    this.cartService.observable.next(id);
  }
}
