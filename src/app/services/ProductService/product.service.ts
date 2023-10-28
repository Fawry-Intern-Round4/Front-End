import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';
import { Product } from 'src/app/models/Product/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl : string = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/product'

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`, {headers: HttpAuthAndContentTypeHeaders})
  }

  getProductInfo(id : number) : Observable<Product> {   
    return this.http.get<Product>(`${this.baseUrl}/${id}`, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  addProduct(product: Product): Observable<Product | HttpErrorResponse> {
    return this.http.post<Product>(`${this.baseUrl}`, product, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  updateProduct(product: Product): Observable<Product | HttpErrorResponse> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }   
}