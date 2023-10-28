import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';
import { StockService } from 'src/app/services/StockService/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  stock!: OrderRequestItem;
  errorMessage: string | null = null;

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit() {
    this.stock = new OrderRequestItem();
  }

  addStock() {
    this.stockService.addStock(this.stock).subscribe({
      error: (error : HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      },
      complete: () => {
        this.router.navigateByUrl('admin/manage/stores');
      }
    });
  }
}
