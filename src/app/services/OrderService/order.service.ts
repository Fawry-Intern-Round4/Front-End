import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order/order';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderRequestModel } from 'src/app/models/OrderRequestModel/order-request-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl : string = 'http://localhost:51636/order'

  constructor(private http:HttpClient) { }

  getAllOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}`)
  }

  getOrdersByGuestEmail(email: string) : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/${email}`)
  }

  getOrdersByDateRange(from: string, to: string) : Observable<Order[]>{
    let params = new HttpParams()
      .set('from', from)
      .set('to', to);
    return this.http.get<Order[]>(`${this.baseUrl}`, {params: params})
  }
  
  createOrder(couponCode: HttpParams, orderRequestModel: OrderRequestModel): Observable<Order | HttpErrorResponse> {
    return this.http.post<Order>(`${this.baseUrl}`, orderRequestModel, { params: couponCode }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  
}
