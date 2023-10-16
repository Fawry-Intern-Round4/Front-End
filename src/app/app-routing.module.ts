// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAllProductsComponent } from './manage-all-products/manage-all-products.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes: Routes = [
  { path : 'manage/products/all', component: ManageAllProductsComponent},
  { path : 'manage/products/add', component: ManageProductComponent},
  { path : 'manage/products/:id', component: ManageProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
