import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { CartService } from 'src/app/services/CartService/cart.service';
import { CouponService } from 'src/app/services/CouponService/coupon.service';
import { TransactionRequestModel } from 'src/app/models/TransactionRequestModel/transaction-request-model';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';
import { OrderRequestModel } from 'src/app/models/OrderRequestModel/order-request-model';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { Discount } from 'src/app/models/Discount/discount';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent {

  orderRequestModel: OrderRequestModel = new OrderRequestModel();

  invoiceAmountAfterDiscount: number = 0;
  errorMessage: string | null = null;
  invoiceAmount: number = 0;
  couponCode: string = '';

  guestEmail: string = '';
  cardNumber: string = '';
  cvv: string = '';

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
      this.couponService.calculateDiscountOnInvoice(this.guestEmail, invoiceAmount, this.couponCode).subscribe({
        next: (discount) => {
          this.invoiceAmountAfterDiscount = invoiceAmount - discount.actualDiscount;
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        },
      });
    } 
  }

  incrementProductQuantity(productId: number, id : number) {
    this.cartService.incrementProductQuantity(productId, id);
    this.calculateInvoiceAmount();
  }
  
  decrementProductQuantity(productId: number, id : number) {
    this.cartService.decrementProductQuantity(productId, id);
    this.calculateInvoiceAmount();
  }  

  applyCouponCode(event: Event) {
    const target = event.target as HTMLInputElement;
    this.couponCode = target.value;
    this.invoiceAmountAfterDiscount = 0;
    this.errorMessage = null;
    this.calculateInvoiceAmount();
  }  

  createOrder() {
    const transactionRequestModel = new TransactionRequestModel(
      this.cardNumber,
      this.cvv
    );
  
    const orderRequestItems = this.cartService.getCartItems().map(item => {
      return new OrderRequestItem(item.productId, item.storeId, item.quantity);
    });

    if (this.couponCode) {
      this.orderRequestModel = new OrderRequestModel(this.guestEmail, transactionRequestModel, orderRequestItems, this.couponCode);
    } else {
      this.orderRequestModel = new OrderRequestModel(this.guestEmail, transactionRequestModel, orderRequestItems);
    }

    this.orderService.createOrder(this.orderRequestModel).subscribe({
      complete: () => {
        this.router.navigateByUrl('store');
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
      },
    });
  }
}
