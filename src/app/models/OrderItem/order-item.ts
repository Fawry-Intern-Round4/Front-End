
export class OrderItem {
    constructor(
      public id: number,
      public productId: number,
      public orderId: number,
      public price: number,
      public quantity: number
    ) {}
}