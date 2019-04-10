import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../../models/ItemModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private items: Item[] = [];
  private cartCount: number;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.observable.subscribe(data=> {
      this.items = this.cartService.getCartItems();
      this.cartCount = this.cartService.getCartCount()
      console.log(this.items)
    })
  }

  remove(id:string){
    this.cartService.remove(id);
    this.cartService.observable.next(id);
  }

}
