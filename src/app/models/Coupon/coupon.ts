export class Coupon {
    id!: number;
    code!: string;
    remainingUsages!: number;
    expiryDate!: string; 
    value!: number;
    active!: boolean;
    type!: string;
}
