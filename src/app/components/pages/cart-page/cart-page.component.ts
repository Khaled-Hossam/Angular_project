import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/ProductModel';
import { Item } from '../../../models/ItemModel';
import { ProductService } from '../../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  private items: Item[] = [];
	private total: number = 0;

	constructor(private productService: ProductService,
		private cartService:CartService) { }

  ngOnInit() {
		// this.cartService.observable.subscribe(() => this.cartCounter = this.cart.getCartCount());
		// this.cart_products = this.cart.getCart();
		
		this.cartService.observable.subscribe(data=> {
			this.items = this.cartService.items;
			this.total = this.cartService.getTotalPrice();
			console.log(data)
		}
    );
  }


  // loadCart(): void {
	// 	this.total = 0;
	// 	this.items = [];
  //   let cart = JSON.parse(localStorage.getItem('cart'));
  //   if(cart){
  //     for (var i = 0; i < cart.length; i++) {
  //       let item = JSON.parse(cart[i]);
  //       this.items.push({
  //         product: item.product,
  //         quantity: item.quantity
  //       });
  //       this.total += item.product.Price * item.quantity;
  //     }
  //   }
		
	// }

	remove(id: string): void {
		this.cartService.remove(id);
    this.cartService.observable.next(id);

	}

}
