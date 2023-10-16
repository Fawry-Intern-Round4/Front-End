import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl : string = 'http://localhost:55139/product'

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`)
  }

  getProductInfo(id : number) : Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);   
  }

  addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product);
  }

  updateProduct(product: Product) : Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product);
  }
}