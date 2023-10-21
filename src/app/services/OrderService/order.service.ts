import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order/order';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderRequestModel } from 'src/app/models/OrderRequestModel/order-request-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl : string = 'http://localhost:51696/order'

  constructor(private http:HttpClient) { }

  createOrder(couponCode: HttpParams, orderRequestModel: OrderRequestModel): Observable<Order | HttpErrorResponse> {
    return this.http.post<Order>(`${this.baseUrl}`, orderRequestModel, { params: couponCode }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  
}
