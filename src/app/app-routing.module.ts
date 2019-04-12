import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
