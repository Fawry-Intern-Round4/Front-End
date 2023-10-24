import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manage-all-products',
  templateUrl: './manage-all-products.component.html',
  styleUrls: ['./manage-all-products.component.css']
})
export class ManageAllProductsComponent implements OnInit{
  products : Product[] = [];

  constructor(private service : ProductService){}

  ngOnInit() : void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: (data) => { this.products = data },
      error: (error) => {
        this.products = [];
        console.log(error);
      }
    });
  }  
}

