
import { OrderRequestItem } from "../OrderRequestItem/order-request-item";
import { TransactionRequestModel } from "../TransactionRequestModel/transaction-request-model";

export class OrderRequestModel {
    constructor(
        public couponCode : string,
        public guestEmail : string,
        public transactionRequestModel : TransactionRequestModel,
        public orderRequestItems : OrderRequestItem[]
    ){
        this.couponCode = couponCode;
        this.guestEmail = guestEmail;
        this.transactionRequestModel = transactionRequestModel;
        this.orderRequestItems = orderRequestItems;
    }
}
