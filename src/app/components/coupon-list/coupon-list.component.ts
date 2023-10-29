import { Component } from '@angular/core';
import { Coupon } from '../../models/Coupon/coupon';
import { CouponService } from 'src/app/services/CouponService/coupon.service';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent {
  errorMessage: string | null = null;
  successMessage: string | null = null;
  apiUrl:string = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/coupon';

  deactivateCoupon(couponCode: string) {
    this.couponService.deactivateCoupon(couponCode).subscribe({
      next: (data) => {
        this.successMessage = `Coupon ${couponCode} deactivated successfully`;
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
      }
    });
  }

  activateCoupon(couponCode: string) {
    this.couponService.activateCoupon(couponCode).subscribe({
      next: (data) => {
        this.successMessage = `Coupon ${couponCode} activated successfully`;
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
      }
    });
  }


  // coupons: Component[]; // 
  Coupons!: Coupon[];
  constructor(private couponService: CouponService,private router:Router) { }

  ngOnInit(): void {
    this.couponService.getCouponsList().subscribe(data => {
      this.Coupons = data;
    });

  
}
}
