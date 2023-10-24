// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StoreHomeComponent } from './components/store-home/store-home.component';
import { ViewStoresComponent } from './components/view-stores/view-stores.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ManageAllProductsComponent } from './components/manage-all-products/manage-all-products.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';

const routes: Routes = [
  { path : 'manage/products', component: ManageAllProductsComponent},
  { path : 'manage/products/add', component: ManageProductComponent},
  { path : 'manage/products/:id', component: ManageProductComponent},
  { path : 'manage/order', component: OrderHistoryComponent},
  { path : 'store/shopping-cart', component: ShoppingCartComponent},
  { path : 'store/:storeId', component: StoreHomeComponent},
  { path : 'store', component: ViewStoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
