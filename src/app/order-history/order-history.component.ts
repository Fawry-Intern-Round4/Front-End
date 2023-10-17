import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

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

  constructor(private service : OrderService){}

  ngOnInit() : void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.service.getAllOrders().subscribe({
      next: (orders) => { this.orders = orders; }, 
      error: (error) => {
        this.orders = [];
      }
    })
  }

  filterOrders(){
    if(this.guestEmail){
      this.service.getOrdersByGuestEmail(this.guestEmail).subscribe({
        next: (orders) => { this.orders = orders; },
        error: (error) => {
          this.orders = [];
        }
      })
    } else if(this.fromDate || this.toDate){
      this.service.getOrdersByDateRange(this.fromDate, this.toDate).subscribe({
        next: (orders) => { this.orders = orders; },
        error: (error) => {
          this.orders = [];
        }
      })
    } else {
      this.getAllOrders();
    }
  }
}
