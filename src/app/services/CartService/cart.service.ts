import { Injectable } from '@angular/core';

import { Store as NgxsStore } from '@ngxs/store';
import { AddToCart, RemoveFromCart } from './cart.state';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private ngxsStore: NgxsStore) { }

  incrementProductQuantity(productId: number, storeId : number) {
    this.getCartItem(productId, storeId).quantity++;
  }
  
  decrementProductQuantity(productId: number, storeId : number) {
    const item = this.getCartItem(productId, storeId);
    if (item.quantity === 1) {
      this.ngxsStore.dispatch(new RemoveFromCart(productId)); 
    } 
    else item.quantity--;
  }  
  
  updateShoppingCart(productId: number, storeId: number, name: string, price: number, image : string) {
    if (this.getCartItem(productId, storeId)) {
      this.ngxsStore.dispatch(new RemoveFromCart(productId));
    } else {
      this.ngxsStore.dispatch(new AddToCart({ productId, storeId, quantity: 1 , name, price, image}));
    }    
  }

  getCartItems(): OrderRequestItem[] {
    return this.ngxsStore.selectSnapshot(state => state.cart);
  }
  
  getCartItem(productId: number, storeId : number): OrderRequestItem {
    return this.ngxsStore.selectSnapshot(state => state.cart.find((item: OrderRequestItem) => item.productId === productId && item.storeId == storeId));
  }
}
