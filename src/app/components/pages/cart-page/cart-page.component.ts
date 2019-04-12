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

		this.cartService.observable.subscribe(data=> {
			this.items = this.cartService.items;
			this.total = this.cartService.getTotalPrice();
			console.log(data)
		}
    );
  }


	remove(id: string): void {
		this.cartService.remove(id);
    this.cartService.observable.next(id);

	}

}
