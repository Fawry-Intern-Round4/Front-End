import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl : string = 'http://localhost:60433/order'

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
}
