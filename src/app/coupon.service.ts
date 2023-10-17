import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from './coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private baseUrl = "https://mocki.io/v1/b5f09c64-fe0e-42c6-9ad8-86135642e321";

  constructor(private httpClient:HttpClient) { }

  getCouponsList(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.baseUrl}`);
  }
  
}
