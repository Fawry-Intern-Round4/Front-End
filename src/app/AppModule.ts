import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { CartState } from './services/CartService/cart.state';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ViewStoresComponent } from './components/view-stores/view-stores.component';
import { StoreHomeComponent } from './components/store-home/store-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ManageAllProductsComponent } from './components/manage-all-products/manage-all-products.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ConsumptionListComponent } from './components/consumption-list/consumption-list.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { LoginComponent } from './components/login/login.component';
  

@NgModule({
  declarations: [
    AppComponent,
    ViewStoresComponent,
    StoreHomeComponent,
    ShoppingCartComponent,
    OrderHistoryComponent,
    ManageAllProductsComponent,
    ManageProductComponent,
    ConsumptionListComponent,
    CouponListComponent, 
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    
    NgxsModule.forRoot([
      CartState,
    ]),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
