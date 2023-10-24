
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Messages } from '../messages.enum';

import { ProductService } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})

export class ManageProductComponent {
  selectedProduct!: Product;
  isAddMode = false;
  productCodeError: string | null = null;

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
          if (error.error.message == Messages.PRODUCT_NOT_FOUND) {
            this.router.navigateByUrl('manage/products/all');
          }
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
        if (error.error.message == Messages.PRODUCT_CODE_ALREADY_EXISTS) {
          this.productCodeError = error.error.message;
        }
      },
      complete: () => {
        this.router.navigateByUrl('manage/products/all');
      }
    });
  }
  
  updateProductInfo() {
    this.productService.updateProduct(this.selectedProduct).subscribe({
      error: (error: HttpErrorResponse) => {
        if (error.error.message == Messages.PRODUCT_CODE_ALREADY_EXISTS) {
          this.productCodeError = error.error.message;
        }
      },
      complete: () => {
        this.router.navigateByUrl('manage/products/all');
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
