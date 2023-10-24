import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Coupon } from 'src/app/models/Coupon/coupon';

@Injectable({
  providedIn: 'root'
})

export class CouponService {

  private baseUrl : string = 'http://localhost:51608/coupons'
  private baseUr2 = "https://mocki.io/v1/b5f09c64-fe0e-42c6-9ad8-86135642e321";
  constructor(private http:HttpClient) { }

  calculateDiscountOnInvoice(invoiceAmount: number, couponCode: string): Observable<number> {
    let params = new HttpParams()
      .set('invoiceAmount', invoiceAmount)
      .set('couponCode', couponCode);
  
    return this.http.get<number>(`${this.baseUrl}/calculate-discount`, { params: params }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  

  getCouponsList(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.baseUr2}`);
  }
}
