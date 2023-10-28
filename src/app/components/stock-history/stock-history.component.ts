import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductConsumption } from 'src/app/models/ProductConsumption/product-consumption';
import { StoreService } from 'src/app/services/StoreService/store.service';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {
  stockHistory!: ProductConsumption[];
  id!: number;
  errorMessage: string | null = null;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getStockHistory();
  }

  getStockHistory() {
    if (this.id) {
      this.storeService.getProductConsumptionsByid(this.id).subscribe({
        next: (data) => { this.stockHistory = data; },
        error: (error : HttpErrorResponse) => {
          this.errorMessage =  error.error.message;
        }
      })
    } else {
      this.storeService.getAllProductConsumptions().subscribe({
        next: (data) => { this.stockHistory = data; },
        error: (error : HttpErrorResponse) => {
          this.errorMessage =  error.error.message;
        }
      })
    }
  }

  setid(id: number) {
    this.id = id;
    this.getStockHistory();
  }
}
