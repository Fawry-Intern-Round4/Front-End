import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order/order';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderRequestModel } from 'src/app/models/OrderRequestModel/order-request-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl : string = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/order'

  constructor(private http:HttpClient) { }

  getAllOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
  }

  getOrdersByGuestEmail(email: string) : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/${email}`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
  }

  getOrdersByDateRange(from: string, to: string) : Observable<Order[]>{
    let params = new HttpParams()
      .set('from', from)
      .set('to', to);
    return this.http.get<Order[]>(`${this.baseUrl}`, {params: params,headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
  }
  
  createOrder(couponCode: HttpParams, orderRequestModel: OrderRequestModel): Observable<Order | HttpErrorResponse> {
    return this.http.post<Order>(`${this.baseUrl}`, orderRequestModel, { params: couponCode }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  
}
