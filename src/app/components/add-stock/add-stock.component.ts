import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';
import { StoreService } from 'src/app/services/StoreService/store.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  stock!: OrderRequestItem;
  addStockError: string | null = null;

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    this.stock = new OrderRequestItem();
  }

  addStock() {
    this.storeService.addStock(this.stock).subscribe({
      error: (error: HttpErrorResponse) => {
        this.addStockError = error.error.message;
      },
      complete: () => {
        this.router.navigateByUrl('admin/manage/stores');
      }
    });
  }
}
