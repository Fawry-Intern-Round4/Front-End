import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreHomeComponent } from './components/store-home/store-home.component';
import { ViewStoresComponent } from './components/view-stores/view-stores.component';
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

const routes: Routes = [
  { path: 'store/shopping-cart', component: ShoppingCartComponent},
  { path: 'store/:storeId', component: StoreHomeComponent},
  { path: 'store', component: ViewStoresComponent},

  { path: 'admin/login', component: LoginComponent},

  { path: 'admin/manage/stores', component: ManageAllStoresComponent},
  { path: 'admin/manage/stores/add', component: AddStoreComponent},

  { path: 'admin/manage/stocks', component: StockHistoryComponent},
  { path: 'admin/manage/stocks/add', component: AddStockComponent},

  { path: 'admin/manage/products', component: ManageAllProductsComponent},
  { path: 'admin/manage/products/add', component: ManageProductComponent},
  { path: 'admin/manage/products/:id', component: ManageProductComponent},

  { path: 'admin/manage/order', component: OrderHistoryComponent},

  { path: 'admin/manage/coupon/add', component: CouponListComponent},
  { path: 'admin/manage/coupon/consumption', component: ConsumptionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}