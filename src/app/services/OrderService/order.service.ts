import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl : string = 'http://localhost:60433/order'

  constructor(private http:HttpClient) { }

}
