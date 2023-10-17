import { Component } from '@angular/core';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent {
  createCoupon() {


    const apiUrl = '/your-api-endpoint'; // Replace with the actual endpoint URL
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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
