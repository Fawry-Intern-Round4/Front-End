export class TransactionRequestModel {
    constructor(
        public guestEmail: string,
        public cardNumber: string,
        public cvv: string
      ) {
        this.guestEmail = guestEmail;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
      } 
}
