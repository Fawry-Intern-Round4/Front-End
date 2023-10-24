import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from 'src/app/models/Product/product';
import { Store } from 'src/app/models/Store/store';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  private baseUrl : string = 'http://localhost:51638/store'

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
}
