import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { StoreService } from '../../services/StoreService/store.service';
import { Store } from '../../models/Store/store';
import { Messages } from '../../messages.enum';
import { Product } from '../../models/Product/product';
import { CartService } from 'src/app/services/CartService/cart.service';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})

export class StoreHomeComponent {

  store!: Store;
  products: Product[] = [];

  constructor (private storeService: StoreService, public cartService: CartService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    const storeId = this.route.snapshot.paramMap.get('storeId');
    if (storeId) {
      this.storeService.getStoreById(Number(storeId)).subscribe({
        next: (store) => {
          this.store = store;
          this.getStoreProducts(Number(storeId));
        },
        error: (error: HttpErrorResponse) => {
          if (error.error.message == Messages.STORE_NOT_FOUND) {
            this.router.navigateByUrl('/store');
          }
        }
      });
    } 
  }

  getStoreProducts(storeId : number){
    this.storeService.getStoreProducts(storeId).subscribe({
      error: (error: HttpErrorResponse) => {
        this.products = []
      },
      next: (products) => {
        this.products = products;
      }
    });
  }
}

  

    // orderRequestItems: { [productId: number]: OrderRequestItem } = {};
  // orderRequestItem!: OrderRequestItem;

    // incrementProductQuantity(productId: number) {
  //   if (this.orderRequestItems[productId]) {
  //     this.orderRequestItems[productId].quantity += 1;
  //   } else {
  //     this.orderRequestItems[productId].quantity = 1;
  //   }
  // }

  // decrementProductQuantity(productId: number) {
  //   if (this.orderRequestItems[productId] && this.orderRequestItems[productId].quantity) {
  //     this.orderRequestItems[productId].quantity -= 1;
  //     if (this.orderRequestItems[productId].quantity == 0){
  //       delete this.orderRequestItems[productId];
  //     }
  //   }
  // }

    // updateShoppingCart(productId: number, storeId: number) {
  //   if (this.orderRequestItems[productId]) {
  //     delete this.orderRequestItems[productId];
  //   } else {
  //     this.orderRequestItem = new OrderRequestItem();
  //     this.orderRequestItem.productId = productId;
  //     this.orderRequestItem.storeId = storeId;
  //     this.orderRequestItem.quantity = 1;
  //     this.orderRequestItems[productId] = this.orderRequestItem;
  //   }
  // }
