import { Store } from "../Store/store";

export class ProductConsumption {
    constructor(
        public id : number,
        public productId: number,
        public store: Store,
        public quantity: number,
        public processType: string,
        public updatedAt: string
    ){}
}