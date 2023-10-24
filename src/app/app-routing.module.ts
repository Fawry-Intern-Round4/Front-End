import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreHomeComponent } from './components/store-home/store-home.component';
import { ViewStoresComponent } from './components/view-stores/view-stores.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  {path: 'manage/order', component: OrderHistoryComponent},
  {path: 'store/shopping-cart', component: ShoppingCartComponent},
  {path: 'store/:storeId', component: StoreHomeComponent},
  {path: 'store', component: ViewStoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
