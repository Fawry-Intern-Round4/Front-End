import { Component } from '@angular/core';
import { Store } from '../../models/Store/store';
import { StoreService } from '../../services/StoreService/store.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-stores',
  templateUrl: './view-stores.component.html',
  styleUrls: ['./view-stores.component.scss']
})
export class ViewStoresComponent{
  stores : Store[] = [];
  errorMessage: string | null = null;

  constructor(private storeService : StoreService){}

  ngOnInit() : void {
    this.getAllStores();
  }

  getAllStores(){
    this.storeService.getAllStores().subscribe({
      next: (stores) => { this.stores = stores; }, 
      error: (error : HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      },
    })
  }
}
