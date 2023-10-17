import { OrderItem } from "./order-item";

export class Order {
  constructor(
    public id: number,
    public guestEmail: string,
    public couponID: number,
    public amount: number,
    public createdAt: Date,
    public orderItems: OrderItem[]
  ) {}
}