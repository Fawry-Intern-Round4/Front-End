import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { CartState } from './services/CartService/cart.state';

import { AppComponent } from './app.component';

import { ViewStoresComponent } from './components/view-stores/view-stores.component';
import { StoreHomeComponent } from './components/store-home/store-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ManageAllProductsComponent } from './components/manage-all-products/manage-all-products.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ConsumptionListComponent } from './components/consumption-list/consumption-list.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { LoginComponent } from './components/login/login.component';
import { ManageAllStoresComponent } from './components/manage-all-stores/manage-all-stores.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StockHistoryComponent } from './components/stock-history/stock-history.component';
import { StoreService } from './services/StoreService/store.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
  
  const ngxsConfig = NgxsModule.forRoot([CartState]);

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
    LoginComponent,
    ManageAllStoresComponent,
    AddStoreComponent,
    AddStockComponent,
    StockHistoryComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
