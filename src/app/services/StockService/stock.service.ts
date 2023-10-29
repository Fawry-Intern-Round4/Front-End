import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';
import { OrderRequestItem } from 'src/app/models/OrderRequestItem/order-request-item';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl : string = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/stock'

  constructor(private http : HttpClient) { }

  addStock(OrderRequestItem: OrderRequestItem): Observable<any | HttpErrorResponse> {
    return this.http.post<any>(`${this.baseUrl}`, OrderRequestItem, {headers: HttpAuthAndContentTypeHeaders()}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
