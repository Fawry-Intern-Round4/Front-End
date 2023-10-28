import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';
import { Product } from 'src/app/models/Product/product';
import { ProductConsumption } from 'src/app/models/ProductConsumption/product-consumption';
import { Store } from 'src/app/models/Store/store';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  private baseUrl : string = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/store'

  constructor(private http:HttpClient) { }

  getAllStores() : Observable<Store[]>{
    return this.http.get<Store[]>(`${this.baseUrl}`)
  }

  getStoreById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.baseUrl}/${id}`, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }   

  getStoreProducts(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/${id}/product`, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  

  getStoreInfo(id : number) : Observable<Store> {   
    return this.http.get<Store>(`${this.baseUrl}/${id}`, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  addStore(store: Store): Observable<Store | HttpErrorResponse> {
    return this.http.post<Store>(`${this.baseUrl}`, store, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  getAllProductConsumptions(): Observable<ProductConsumption[]> {
    return this.http.get<ProductConsumption[]>(`${this.baseUrl}/consumption`, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  getProductConsumptionsByid(id: number): Observable<ProductConsumption[]> {
    return this.http.get<ProductConsumption[]>(`${this.baseUrl}/consumption?storeId=${id}`, {headers: HttpAuthAndContentTypeHeaders}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}