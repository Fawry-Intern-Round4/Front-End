import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { CartState } from './services/CartService/cart.state';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {MessageService} from "primeng/api";
import {TableModule} from "primeng/table";

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import {CouponFormComponent} from "./components/coupon-form/coupon-form.component";


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
    DashboardComponent,
    UserListComponent,
    NewUserFormComponent,
    CouponFormComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,

    NgxsModule.forRoot([
      CartState,
    ]),
  ],

  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
