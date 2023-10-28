
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/ProductService/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/models/Product/product';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})

export class ManageProductComponent {
  selectedProduct!: Product;
  isAddMode = false;
  errorMessage: string | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddMode = false;
      this.productService.getProductInfo(Number(id)).subscribe({
        next: (product) => {
          this.selectedProduct = product;
        },
        error: (error: HttpErrorResponse) => {
          this.router.navigateByUrl('admin/manage/products');
        }
      });
    } else {
      this.isAddMode = true;
      this.selectedProduct = new Product();
    }
  }

  addProduct() {
    this.productService.addProduct(this.selectedProduct).subscribe({
      error: (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
      },
      complete: () => {
        this.router.navigateByUrl('admin/manage/products');
      }
    });
  }
  
  updateProductInfo() {
    this.productService.updateProduct(this.selectedProduct).subscribe({
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;      
      },
      complete: () => {
        this.router.navigateByUrl('admin/manage/products');
      }
    });
  }
  
  onFileChange(event : any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.selectedProduct.image = reader.result as string;
      }
    }
  }
}
