
import { OrderRequestItem } from "../OrderRequestItem/order-request-item";
import { TransactionRequestModel } from "../TransactionRequestModel/transaction-request-model";

export class OrderRequestModel {
    guestEmail? : string
    transactionRequestModel? : TransactionRequestModel
    orderRequestItems? : OrderRequestItem[]
    couponCode? : string

    constructor(
        guestEmail? : string,
        transactionRequestModel? : TransactionRequestModel,
        orderRequestItems? : OrderRequestItem[],
        couponCode? : string,
    ){
        this.couponCode = couponCode;
        this.guestEmail = guestEmail;
        this.transactionRequestModel = transactionRequestModel;
        this.orderRequestItems = orderRequestItems;
    }
}
