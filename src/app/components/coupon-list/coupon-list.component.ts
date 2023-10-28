import { Component } from '@angular/core';
import { Coupon } from '../../models/Coupon/coupon';
import { CouponService } from 'src/app/services/CouponService/coupon.service';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent {
  errorMessage: string | null = null;
  successMessage: string | null = null;

  createCoupon() {
    const apiUrl = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/coupon';

    this.http.post(apiUrl,  { HttpAuthAndContentTypeHeaders }).subscribe(
      (response: any) => {
        this.successMessage = 'Coupon created successfully ' + response;
      },
      (error: HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      }
    );
  }

  http: any;
  deactivateCoupon(couponCode: string) {

    const apiUrl = `/deactivate/${couponCode}`;

    this.http.put(apiUrl, {}, { HttpAuthAndContentTypeHeaders }).subscribe(
      (response: any) => {
        this.successMessage = 'Coupon deactivated successfully ' + response;
      },
      (error: HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      }
    );
  }







  // coupons: Component[]; // 
  Coupons!: Coupon[];
  constructor(private couponService: CouponService) { }

  ngOnInit(): void {
    this.couponService.getCouponsList().subscribe(data => {
      this.Coupons = data;
    });

  
}
}
