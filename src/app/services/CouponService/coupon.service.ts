import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CouponService {

  private baseUrl : string = 'http://localhost:51608/coupons'

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
}
