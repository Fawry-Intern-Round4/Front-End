import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageAllProductsComponent } from './manage-all-products/manage-all-products.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageAllProductsComponent,
    ManageProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
