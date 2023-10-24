
export class OrderItem {
    constructor(
      public id: number,
      public productID: number,
      public productName: String,
      public productPhoto: String,
      public orderID: number,
      public price: number,
      public quantity: number
    ) {}
}