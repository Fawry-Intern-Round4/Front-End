import { Component } from '@angular/core';
import { Coupon } from '../../models/Coupon/coupon';
import { HttpHeaders } from '@angular/common/http';
import { CouponService } from 'src/app/services/CouponService/coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent {
  createCoupon() {
    const apiUrl = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/coupon'; // Replace with the actual endpoint URL
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'
    , 'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

    this.http.post(apiUrl,  { headers }).subscribe(
      (response: any) => {
        // Handle the response, e.g., display the created coupon data
        console.log('Coupon created successfully:', response);
      },
      (error: any) => {
        // Handle an error response here, e.g., show an error message
        console.error('Error creating coupon', error);
      }
    );
  }

  http: any;
  deactivateCoupon(couponCode: string) {

    const apiUrl = `/deactivate/${couponCode}`;
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put(apiUrl, {}, { headers }).subscribe(
      (response: any) => {
        // Handle a successful response here, e.g., show a success message
        console.log('Coupon deactivated successfully!!', response);
      },
      (error: any) => {
        // Handle an error response here, e.g., show an error message
        console.error('Error deactivating coupon', error);
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
