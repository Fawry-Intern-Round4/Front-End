import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {CouponType} from "../../models/Coupon/CouponType";

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {
  couponForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.couponForm = this.fb.group({
      remainingUsages: [null, [Validators.required, Validators.min(0)]],
      expiryDate: [null, [Validators.required, this.futureOrPresentValidator]],
      value: [null, [Validators.required, Validators.min(0), this.maxValueValidator]],
      active: [false, Validators.required],
      type: [CouponType.PERCENTAGE, Validators.required]
    });
  }

  maxValueValidator(control: AbstractControl): { [key: string]: any } | null {
    const type = control.parent?.get('type')?.value;
    const maxValue = type === CouponType.PERCENTAGE ? 100 : 1000;

    if (control.value != null && control.value > maxValue) {
      return { maxValueExceeded: true };
    }

    return null;
  }


  futureOrPresentValidator(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    return selectedDate >= currentDate ? null : { futureOrPresent: true };
  }


  onSubmit() {
    if (this.couponForm.valid) {
      // Send the form data to the API here
      console.log(this.couponForm.value);
    }
  }

  protected readonly CouponType = CouponType;
}
