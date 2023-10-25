import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';
import { Product } from 'src/app/models/Product/product';
import { ProductConsumption } from 'src/app/models/ProductConsumption/product-consumption';
import { Store } from 'src/app/models/Store/store';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  private baseUrl : string = 'http://localhost:56741/store'

  constructor(private http:HttpClient) { }

  getAllStores() : Observable<Store[]>{
    return this.http.get<Store[]>(`${this.baseUrl}`)
  }

  getStoreById(storeId: number): Observable<Store> {
    return this.http.get<Store>(`${this.baseUrl}/get?storeId=${storeId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }   

  getStoreProducts(storeId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?storeId=${storeId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  

  getStoreInfo(storeId : number) : Observable<Store> {   
    return this.http.get<Store>(`${this.baseUrl}/get?storeId=${storeId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  addStore(store: Store): Observable<Store | HttpErrorResponse> {
    return this.http.post<Store>(`${this.baseUrl}`, store).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  addStock(OrderRequestItem: OrderRequestItem): Observable<any | HttpErrorResponse> {
    return this.http.post<any>(`${this.baseUrl}/addStock`, OrderRequestItem).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  getAllProductConsumptions(): Observable<ProductConsumption[]> {
    return this.http.get<ProductConsumption[]>(`${this.baseUrl}/getAllProductConsumptions`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  
  getProductConsumptionsByStoreId(storeId: number): Observable<ProductConsumption[]> {
    return this.http.get<ProductConsumption[]>(`${this.baseUrl}/getProductConsumptionsByStoreId?storeId=${storeId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
