export class TransactionRequestModel {
    constructor(
        public cardNumber: string,
        public cvv: string
      ) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
      } 
}
