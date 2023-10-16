import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})

export class ManageProductComponent {
  selectedProduct!: Product;
  isAddMode = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddMode = false;
      this.productService.getProductInfo(Number(id)).subscribe(product => {
        this.selectedProduct = product;
      });
    } else {
      this.isAddMode = true;
      this.selectedProduct = new Product();
    }
  }

  updateProductInfo() {
    this.productService.updateProduct(this.selectedProduct).subscribe();
  }

  addProduct() {
    this.productService.addProduct(this.selectedProduct).subscribe();
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
