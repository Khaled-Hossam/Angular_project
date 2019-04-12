import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/header-components/cart/cart.component';
import { WishlistComponent } from './components/header-components/wishlist/wishlist.component';
import { LogoutComponent } from './components/header-components/logout/logout.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { InputComponent } from './components/shared/input/input.component';
import { SubmitComponent } from './components/shared/submit/submit.component';

@NgModule({
  declarations: [AppComponent,
    FooterComponent, 
    HomeComponent, 
    HeaderComponent, CartComponent, WishlistComponent, LogoutComponent, CartPageComponent, SingleProductComponent, ProductDetailsComponent, LoginComponent, RegisterComponent, InputComponent, SubmitComponent
  ],
  imports: [
    
    
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
