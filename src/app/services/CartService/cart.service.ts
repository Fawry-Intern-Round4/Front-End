import { Injectable } from '@angular/core';

import { Store as NgxsStore } from '@ngxs/store';
import { AddToCart, RemoveFromCart } from './cart.state';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private ngxsStore: NgxsStore) { }

  incrementProductQuantity(productId: number, id : number) {
    this.getCartItem(productId, id).quantity++;
  }
  
  decrementProductQuantity(productId: number, id : number) {
    const item = this.getCartItem(productId, id);
    if (item.quantity === 1) {
      this.ngxsStore.dispatch(new RemoveFromCart(productId)); 
    } 
    else item.quantity--;
  }  
  
  updateShoppingCart(productId: number, storeId: number, name: string, price: number, image : string) {
    if (this.getCartItem(productId, storeId)) {
      this.ngxsStore.dispatch(new RemoveFromCart(productId));
    } else {
      const orderRequestItem = new OrderRequestItem(productId, storeId, 1, name, price, image);
      this.ngxsStore.dispatch(new AddToCart(orderRequestItem));
    }    
  }

  getCartItems(): OrderRequestItem[] {
    return this.ngxsStore.selectSnapshot(state => state.cart);
  }
  
  getCartItem(productId: number, id : number): OrderRequestItem {
    return this.ngxsStore.selectSnapshot(state => state.cart.find((item: OrderRequestItem) => item.productId === productId && item.storeId == id));
  }
}
