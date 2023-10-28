import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { StoreService } from '../../services/StoreService/store.service';
import { Store } from '../../models/Store/store';
import { Product } from '../../models/Product/product';
import { CartService } from 'src/app/services/CartService/cart.service';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})

export class StoreHomeComponent {

  store!: Store;
  products: Product[] = [];
  errorMessage: string | null = null;

  constructor (private storeService: StoreService, public cartService: CartService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.storeService.getStoreById(Number(id)).subscribe({
        next: (store) => {
          this.store = store;
          this.getStoreProducts(Number(id));
        },
        error: () => {
          this.router.navigateByUrl('/store');
        }
      });
    } 
  }

  getStoreProducts(id : number){
    this.storeService.getStoreProducts(id).subscribe({
      error: (error : HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      },
      next: (products) => {
        this.products = products;
      }
    });
  }
}