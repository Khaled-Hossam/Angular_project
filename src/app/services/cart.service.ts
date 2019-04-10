import { Injectable } from '@angular/core';
import { Item } from '../models/ItemModel';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Item[] = [];
  private total: number = 0;
  observable: BehaviorSubject<any> = new BehaviorSubject(0);


  constructor(private productService: ProductService) { 
    this.loadCart();
  }

  loadCart(): void {
		this.total = 0;
		this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart){
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += item.product.Price * item.quantity;
      }
    }
		
  }
  
  
  public getCartItems() {
    // this.loadCart();
    // return this.observable.asObservable();
    return this.items;
  }

  public getCartCount() {
    return this.items.length;
  }

  public getTotalPrice() :number {
    return this.total;
  }

  add(id:string): void{
    var item: Item = {
      product: this.productService.find(id),
      quantity: 1
    };
    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: Item = JSON.parse(cart[i]);
        if (item.product.ProductId == id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: Item = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }

    this.loadCart();
  }
  

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.ProductId == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
  
}
