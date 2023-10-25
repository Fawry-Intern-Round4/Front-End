import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from 'src/app/models/Product/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl : string = 'http://localhost:54341/product'

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`)
  }

  getProductInfo(id : number) : Observable<Product> {   
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  addProduct(product: Product): Observable<Product | HttpErrorResponse> {
    return this.http.post<Product>(`${this.baseUrl}`, product).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  updateProduct(product: Product): Observable<Product | HttpErrorResponse> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }   
}