
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from 'src/app/models/Order/order';
import { OrderService } from 'src/app/services/OrderService/order.service';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  orders : Order[] = [];
  guestEmail: string = '';
  fromDate: string = '';
  toDate: string = '';
  errorMessage: string | null = null;

  constructor(private service : OrderService){}

  ngOnInit() : void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.service.getAllOrders().subscribe({
      next: (orders) => { this.orders = orders; }, 
      error: (error : HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      }
    })
  }

  filterOrders(){
    if(this.guestEmail){
      this.service.getOrdersByGuestEmail(this.guestEmail).subscribe({
        next: (orders) => { this.orders = orders; },
        error: (error : HttpErrorResponse) => {
          this.errorMessage =  error.error.message;
        }
      })
    } else if(this.fromDate || this.toDate){
      this.service.getOrdersByDateRange(this.fromDate, this.toDate).subscribe({
        next: (orders) => { this.orders = orders; },
        error: (error : HttpErrorResponse) => {
          this.errorMessage =  error.error.message;
        }
      })
    } else {
      this.getAllOrders();
    }
  }
}
