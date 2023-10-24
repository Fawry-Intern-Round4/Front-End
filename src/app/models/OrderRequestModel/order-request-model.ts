
import { OrderRequestItem } from "../OrderRequestItem/order-request-item";
import { TransactionRequestModel } from "../TransactionRequestModel/transaction-request-model";

export class OrderRequestModel {
    constructor(
        public transactionRequestModel : TransactionRequestModel,
        public orderRequestItems : OrderRequestItem[]
    ){
        this.transactionRequestModel = transactionRequestModel;
        this.orderRequestItems = orderRequestItems;
    }
}
