import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Coupon } from 'src/app/models/Coupon/coupon';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';
import { Discount } from 'src/app/models/Discount/discount';

@Injectable({
  providedIn: 'root'
})

export class CouponService {

  private baseUrl : string = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/coupon'
  constructor(private http:HttpClient) { }

  calculateDiscountOnInvoice(customerEmail: string, invoiceAmount: number, couponCode: string): Observable<Discount> {
    let params = new HttpParams()
      .set('code', couponCode)
      .set('customerEmail', customerEmail)
      .set('orderPrice', invoiceAmount)
      
    return this.http.get<Discount>(`${this.baseUrl}/discount`, { params: params, headers: HttpAuthAndContentTypeHeaders() }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  

  getCouponsList(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.baseUrl}`, { headers: HttpAuthAndContentTypeHeaders() });
  }

  createCoupon(coupon: Coupon): Observable<Coupon | HttpErrorResponse> {
    return this.http.post<Coupon>(`${this.baseUrl}`, coupon, { headers: HttpAuthAndContentTypeHeaders() }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  deactivateCoupon(couponCode: string): Observable<Coupon | HttpErrorResponse> {
    return this.http.put<Coupon>(`${this.baseUrl}/deactivation/${couponCode}`, {},{ headers: HttpAuthAndContentTypeHeaders() }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
  activateCoupon(couponCode: string): Observable<Coupon | HttpErrorResponse> {
    return this.http.put<Coupon>(`${this.baseUrl}/activation/${couponCode}`, {},{ headers: HttpAuthAndContentTypeHeaders() }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
