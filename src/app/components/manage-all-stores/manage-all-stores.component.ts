import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/StoreService/store.service';
import { Store } from 'src/app/models/Store/store';

@Component({
  selector: 'app-manage-all-stores',
  templateUrl: './manage-all-stores.component.html',
  styleUrls: ['./manage-all-stores.component.css']
})
export class ManageAllStoresComponent implements OnInit {
  stores : Store[] = [];

  constructor(private service : StoreService){}

  ngOnInit() : void {
    this.getAllStores();
  }

  getAllStores() {
    this.service.getAllStores().subscribe({
      next: (data) => { this.stores = data },
      error: (error) => {
        this.stores = [];
        console.log(error);
      }
    });
  }  
}
