import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';
import { Item } from 'src/app/models/ItemModel';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service.';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product :Product;
  constructor(private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  ngOnInit() {
  }

  addToCart(id:string){
    this.cartService.add(id);    
    this.cartService.observable.next(id);
  }

  addToWishlist(id:string){
    this.wishlistService.add(id);    
    this.wishlistService.observable.next(id);
  }

}
