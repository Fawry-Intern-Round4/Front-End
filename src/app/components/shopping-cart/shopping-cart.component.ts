import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { CartService } from 'src/app/services/CartService/cart.service';
import { CouponService } from 'src/app/services/CouponService/coupon.service';
import { TransactionRequestModel } from 'src/app/models/TransactionRequestModel/transaction-request-model';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';
import { OrderRequestModel } from 'src/app/models/OrderRequestModel/order-request-model';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent {
  invoiceAmountAfterDiscount: number = 0;
  couponErrorMessage: string | null = null;
  invoiceAmount: number = 0;
  couponCode: string = '';

  guestEmail: string = '';
  cardNumber: string = '';
  cvv: string = '';
  createOrderErrorMessage: string | null = null;

  constructor(private http: HttpClient, public cartService: CartService, 
    private couponService: CouponService, private orderService : OrderService, private router: Router) {}

  ngOnInit() {
    this.calculateInvoiceAmount();
  }

  calculateInvoiceAmount() {
    const cartItems = this.cartService.getCartItems();
    const invoiceAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    this.invoiceAmount = invoiceAmount;

    if (this.couponCode != null && this.couponCode !== '') {
      this.couponService.calculateDiscountOnInvoice(invoiceAmount, this.couponCode).subscribe({
        next: (couponDiscount) => {
          this.invoiceAmountAfterDiscount = invoiceAmount - couponDiscount;
        },
        error: (error: HttpErrorResponse) => {
          this.couponErrorMessage = error.error.message;
        },
      });
    } 
  }

  incrementProductQuantity(productId: number, storeId : number) {
    this.cartService.incrementProductQuantity(productId, storeId);
    this.calculateInvoiceAmount();
  }
  
  decrementProductQuantity(productId: number, storeId : number) {
    this.cartService.decrementProductQuantity(productId, storeId);
    this.calculateInvoiceAmount();
  }  

  applyCouponCode(event: Event) {
    const target = event.target as HTMLInputElement;
    this.couponCode = target.value;
    this.invoiceAmountAfterDiscount = 0;
    this.couponErrorMessage = null;
    this.calculateInvoiceAmount();
  }  

  createOrder() {
    const transactionRequestModel = new TransactionRequestModel(
      this.guestEmail,
      this.cardNumber,
      this.cvv
    );
  
    const orderRequestItems = this.cartService.getCartItems().map(item => {
      return new OrderRequestItem(item.productId, item.storeId, item.quantity);
    });
  
    const orderRequestModel = new OrderRequestModel(transactionRequestModel, orderRequestItems);
  
    let couponCodeParam = new HttpParams().set('couponCode', this.couponCode);

    this.orderService.createOrder(couponCodeParam, orderRequestModel).subscribe({
      next: (response) => {
        this.router.navigateByUrl('store');
      },
      error: (error: HttpErrorResponse) => {
        this.createOrderErrorMessage = error.error.message;
      },
    });
  }
}
