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
  storeId!: number;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getStockHistory();
  }

  getStockHistory() {
    if (this.storeId) {
      this.storeService.getProductConsumptionsByStoreId(this.storeId).subscribe(data => {
        this.stockHistory = data;
      });
    } else {
      this.storeService.getAllProductConsumptions().subscribe(data => {
        this.stockHistory = data;
      });
    }
  }

  setStoreId(id: number) {
    this.storeId = id;
    this.getStockHistory();
  }
}
