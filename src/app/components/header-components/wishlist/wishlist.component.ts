import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/ItemModel';
import { WishlistService } from 'src/app/services/wishlist.service.';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  private items: Item[] = [];
  private wishlistCount: number;

  constructor(private wishlistService:WishlistService) { }

  ngOnInit() {
    this.wishlistService.observable.subscribe(data=> {
      this.items = this.wishlistService.getWishlistItems();
      this.wishlistCount = this.wishlistService.getWishlistCount()
      console.log(this.items)
    })
  }

  remove(id:string){
    this.wishlistService.remove(id);
    this.wishlistService.observable.next(id);
  }

}
