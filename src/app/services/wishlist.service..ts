import { Injectable } from '@angular/core';
import { Item } from '../models/ItemModel';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public items: Item[] = [];
  private total: number = 0;
  observable: BehaviorSubject<any> = new BehaviorSubject(0);


  constructor(private productService: ProductService) { 
    this.loadWishlist();
  }

  loadWishlist(): void {
		this.total = 0;
		this.items = [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if(wishlist){
      for (var i = 0; i < wishlist.length; i++) {
        let item = JSON.parse(wishlist[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += item.product.Price * item.quantity;
      }
    }
		
  }
  
  
  public getWishlistItems() {
    // this.loadWishlist();
    // return this.observable.asObservable();
    return this.items;
  }

  public getWishlistCount() {
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
    if (localStorage.getItem('wishlist') == null) {
      let wishlist: any = [];
      wishlist.push(JSON.stringify(item));
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } else {
      let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
      let index: number = -1;
      for (var i = 0; i < wishlist.length; i++) {
        let item: Item = JSON.parse(wishlist[i]);
        if (item.product.ProductId == id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        wishlist.push(JSON.stringify(item));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      } else {
        let item: Item = JSON.parse(wishlist[index]);
        item.quantity += 1;
        wishlist[index] = JSON.stringify(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
    }

    this.loadWishlist();
  }
  

	remove(id: string): void {
		let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
		let index: number = -1;
		for (var i = 0; i < wishlist.length; i++) {
			let item: Item = JSON.parse(wishlist[i]);
			if (item.product.ProductId == id) {
				wishlist.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
		this.loadWishlist();
  }
  
}
